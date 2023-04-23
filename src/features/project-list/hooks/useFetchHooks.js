import { endPoints } from "@/constants";
import { useQuery } from "react-query";
import {
  fetchProjectList,
  fetchProjectListFilter,
} from "../api/fetchApis";

export const useProjectList = (options) => {
  return useQuery([endPoints.projectList], fetchProjectList, options);
};

export const useProjectListFilter = (id, searchValue, options) => {
  const searchTrimmed = searchValue?.trim();
  return useQuery(
    [endPoints.projectList, id, searchTrimmed],
    fetchProjectListFilter,
    options
  );
};
