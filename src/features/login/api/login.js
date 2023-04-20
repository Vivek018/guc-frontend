import { endPoints } from "@/constants";
import { axios } from "@/lib/axios";

export const login = (data) => {
  return axios.post(endPoints.login, data);
};
