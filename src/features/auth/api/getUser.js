import { endPoints } from "@/constants";
import { axiosPrivate } from "@/lib/axios";

export const getUser = () => {
  return axiosPrivate.get(endPoints.getUser);
}