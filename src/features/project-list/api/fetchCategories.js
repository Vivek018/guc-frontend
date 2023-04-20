import { endPoints } from "@/constants";
import { axios } from "@/lib/axios";

export const fetchCategories = () => {
  return axios.get(endPoints.categories);
};

