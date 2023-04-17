import Axios from 'axios';

import { API_URL } from '@/constants';
import { storage } from '@/utils/storage';
import { refreshToken } from '@/api/refreshToken';

export const axios = Axios.create({baseURL: API_URL});
  
export const axiosPrivate = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const authRequestInterceptor = (config) => {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

const authResponseSuccessInterceptor = (response) => {
  return response.data;
}

const authResponseErrorInterceptor = async (error) => {
  const prevRequest = error?.config;
  const message = error.response?.data?.message || error.message;
  
  if (error?.response?.status === 403 && !prevRequest?.sent) {
    prevRequest.sent = true;
    const response = await refreshToken();
    const token = response.data?.token;
    storage.setToken(token);
    prevRequest.headers['Authorization'] = `Bearer ${token}`;
    return axiosPrivate(prevRequest);
  }
  return Promise.reject(message);
}

axiosPrivate.interceptors.request.use(authRequestInterceptor);
axiosPrivate.interceptors.response.use(
  authResponseSuccessInterceptor,
  authResponseErrorInterceptor
);