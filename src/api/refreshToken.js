import { endPoints } from "@/constants";
import { axios } from "@/lib/axios";

export const refreshToken = () => {
  return axios.get(endPoints.refreshToken, {
      withCredentials: true
  });
}