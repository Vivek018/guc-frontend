import { endPoints } from "@/constants";
import { axios } from "@/lib/axios";

const categoryId = "category_id";
const title = "title";
const brief = "brief";

export const fetchProjectList = async () => {
  return await axios.get(endPoints.projectList);
};

export const fetchProjectListFilter = async ({ queryKey }) => {
  const id = queryKey[1];
  const searchValue = queryKey[2];

  if (id && !searchValue) {
    return await axios.get(`${endPoints.projectList}?${categoryId}=${id}`);
  } else if (!id && searchValue) {
    return await axios.get(`${endPoints.projectList}?${title}_like=${searchValue}`);
  }
  return await axios.get(
    `${endPoints.projectList}?${title}_like=${searchValue}&${categoryId}=${id}`
  );
};
