import { useEffect, useMemo, useState } from "react";
import { useProjectList, useProjectListFilter } from "../hooks/useFetchHooks";
import { ProjectListCard } from "./ProjectListCard";
import { useQueryClient } from "react-query";
import { endPoints } from "@/constants";
import { ProjectListPagination } from "./ProjectListPagination";
import { PAGE_SIZE } from "../constants";

export const ProjectListContent = ({
  selectedCategoryId,
  searchValue,
}) => {
  const [projectList, setProjectList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();

  const { data: projects, isLoading: isProjectLoading } = useProjectList();

  const currentProjectData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return projectList?.slice(firstPageIndex, lastPageIndex);
  }, [projectList, currentPage]);

  const { data: projectFilteredList, isLoading: isProjectFilterLoading } =
    useProjectListFilter(selectedCategoryId, searchValue);

  useEffect(() => {
    if (!selectedCategoryId && !searchValue) {
      setProjectList(projects);
    } else {
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
    <>
      <div className="grid grid-cols-3 auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px] px-[1%]">
        {currentProjectData?.map(({ id, ...project }) => {
          return <ProjectListCard key={id} project={project} />;
        })}
      </div>
      {projectList ? (
        <ProjectListPagination
          currentPage={currentPage}
          totalCount={projectList?.length}
          onPageChange={(page) => setCurrentPage(page)}
        />
      ) : null}
    </>
  );
};
