import { useEffect, useState } from "react";
import { useProjectList, useProjectListFilter } from "../hooks/useFetchHooks";
import { ProjectListCard } from "./ProjectListCard";
import { useQueryClient } from "react-query";
import { endPoints } from "@/constants";

export const ProjectListContent = ({ selectedCategoryId, searchValue }) => {
  const [projectList, setProjectList] = useState(null);
  const queryClient = useQueryClient();

  const { data: projects, isLoading: isProjectLoading } = useProjectList();

  const { data: projectFilteredList, isLoading: isProjectFilterLoading } =
    useProjectListFilter(selectedCategoryId, searchValue);

  useEffect(() => {
    if (!selectedCategoryId && !searchValue) {
      setProjectList(projects);
    } else {
      queryClient.invalidateQueries([endPoints.projectList, "filter"]);
      setProjectList(projectFilteredList);
    }
  }, [
    selectedCategoryId,
    searchValue,
    projects,
    projectFilteredList,
    setProjectList,
  ]);

  if (isProjectLoading || isProjectFilterLoading) return null;

  return (
    <div className="grid grid-cols-3 grid-rows-3 mt-16 gap-x-[60px] gap-y-[30px] px-[1%]">
      {projectList?.map(({ id, ...project }) => {
        return <ProjectListCard key={id} project={project} />;
      })}
    </div>
  );
};
