import { endPoints } from "@/constants";
import { useQuery } from "react-query";
import {
  fetchUserProjectList,
  fetchUserProjectListFilter,
} from "../api/fetchApis";

export const useUserProjectList = (options) => {
  return useQuery([endPoints.userProjectList], fetchUserProjectList, options);
};

export const useUserProjectListFilter = (id, searchValue, options) => {
  const searchTrimmed = searchValue?.trim();
  return useQuery(
    [endPoints.userProjectList, id, searchTrimmed],
    fetchUserProjectListFilter,
    options
  );
};
