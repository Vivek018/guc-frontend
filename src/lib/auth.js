import { getUser } from "@/features/auth/api/getUser";
import { login } from "@/features/auth/api/login";
import { configureAuth } from "@/lib/react-query-auth";
import { storage } from '@/utils/storage';

const handleUserResponse = async (data) => {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

const userFn = async () => {
  const { user } = await getUser();
  return user ?? null;
}

const loginFn = async (data) => {
  const response = await login(data);
  const user = await handleUserResponse(response);
  return user;
}

const logoutFn = async () => {
  storage.clearToken();
  window.location.assign(window.location.origin);
}

export const { useUser, useLogin, useLogout } = configureAuth({
  userFn,
  loginFn,
  logoutFn,
});
