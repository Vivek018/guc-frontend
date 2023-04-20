import { endPoints } from "@/constants";
import { useQuery } from "react-query";
import {
  fetchCategories,
  fetchProjectList,
  fetchProjectListFilter,
} from "../api/fetchApis";

export const useCategories = (options) => {
  return useQuery([endPoints.categories], fetchCategories, options);
};

export const useProjectList = (options) => {
  return useQuery([endPoints.projectList], fetchProjectList, options);
};

export const useProjectListFilter = (id, searchValue) => {
  const searchTrimmed = searchValue?.trim();
  return useQuery(
    [endPoints.projectList, id, searchTrimmed],
    fetchProjectListFilter
  );
};
