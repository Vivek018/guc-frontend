import { endPoints } from "@/constants";
import { axios } from "@/lib/axios";

const categoryId = "category_id";
const title = "title";
const brief = "brief";

export const fetchUserProjectList = () => {
  return axios.get(endPoints.userProjectList);
};

export const fetchUserProjectListFilter = ({ queryKey }) => {
  const id = queryKey[1];
  const searchValue = queryKey[2];

  if (id && !searchValue) {
    return axios.get(`${endPoints.userProjectList}?${categoryId}=${id}`);
  } else if (!id && searchValue) {
    return axios.get(`${endPoints.userProjectList}?${title}_like=${searchValue}`);
  }
  return axios.get(
    `${endPoints.userProjectList}?${title}_like=${searchValue}&${categoryId}=${id}`
  );
};
