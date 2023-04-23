import { endPoints } from "@/constants";
import { useQuery } from "react-query";
import { fetchCategories } from "../api/fetchApis";

export const useCategories = (options) => {
  return useQuery([endPoints.categories], fetchCategories, options);
};
