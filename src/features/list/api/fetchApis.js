import { axios } from "@/lib/axios";
import { endPoints } from "@/constants";

export const fetchCategories = () => {
  return axios.get(endPoints.categories);
};
