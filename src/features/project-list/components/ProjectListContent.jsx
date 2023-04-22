import { useEffect, useMemo, useState } from "react";
import { useProjectList, useProjectListFilter } from "../hooks/useFetchHooks";
import { ProjectListCard } from "./ProjectListCard";
import { endPoints } from "@/constants";
import { ProjectListPagination } from "./ProjectListPagination";
import { PAGE_SIZE } from "../constants";
import { ProjectCardSkeleton } from "./ui/ProjectCardSkeleton";
import { Error } from "@/components/Error";

export const ProjectListContent = ({ selectedCategoryId, searchValue }) => {
  const [projectList, setProjectList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategoryId, searchValue, setCurrentPage]);

  const { data: projects, isLoading: isProjectLoading } = useProjectList();

  const { data: projectFilteredList, isLoading: isProjectFilterLoading } =
    useProjectListFilter(selectedCategoryId, searchValue, {
      enabled: !!selectedCategoryId || !!searchValue,
    });

  const currentProjectData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return projectList?.slice(firstPageIndex, lastPageIndex);
  }, [projectList, currentPage]);

  useEffect(() => {
    if (!selectedCategoryId && !searchValue) {
      setProjectList(projects);
    } else {
      setProjectList(projectFilteredList);
    }
    return () => {
      setProjectList(null);
    }
  }, [
    selectedCategoryId,
    searchValue,
    projects,
    projectFilteredList,
    setProjectList,
  ]);

  if (isProjectLoading || isProjectFilterLoading) {
    return (
      <div className="min-h-[700px]">
        <div className="grid grid-cols-3 auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px] px-[1%]">
          {Array.from({ length: 3 }).map((val, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[700px]">
      <div className="grid grid-cols-3 auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px] px-[1%]">
        {currentProjectData?.map(({ id, ...project }) => {
          return <ProjectListCard key={id} project={project} />;
        })}
      </div>
      {projectList ? (
        <ProjectListPagination
          currentPage={currentPage}
          totalCount={projectList?.length}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
