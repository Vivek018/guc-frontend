import { endPoints } from "@/constants";
import { useQuery } from "react-query";
import { fetchCategories } from "../api/fetchCategories";

export const useCategories = () => {
  return useQuery([endPoints.categories], fetchCategories);
};
