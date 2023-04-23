import { useEffect, useMemo, useState } from "react";
import { useProjectList, useProjectListFilter } from "../hooks/useFetchHooks";
import { ProjectListCard } from "./ProjectListCard";
import { endPoints } from "@/constants";
import { ProjectListPagination } from "./ProjectListPagination";
import { PAGE_SIZE } from "../constants";
import { ProjectCardSkeleton } from "./ui/ProjectCardSkeleton";
import { ErrorHandler } from "@/components/ErrorHandler";
import { useList } from "../hooks/useListContent";

export const ProjectListContent = ({ selectedCategoryId, searchValue }) => {
  const {
    data: projects,
    isLoading: isProjectLoading,
    isError: isProjectError,
    error: projectError,
  } = useProjectList();

  const {
    data: projectFilteredList,
    isLoading: isProjectFilterLoading,
    isError: isProjectFilterError,
    error: projectFilterError,
  } = useProjectListFilter(selectedCategoryId, searchValue, {
    enabled: !!selectedCategoryId || !!searchValue,
  });

  const { currentPage, setCurrentPage, currentListData: currentProjectData, list: projectList } = useList({
    selectedCategoryId,
    searchValue,
    normalList: projects,
    filteredList: projectFilteredList,
  });

  if (isProjectLoading || isProjectFilterLoading) {
    return (
      <div className="min-h-[700px]">
        <div className="grid grid-cols-3 max-desktop:gap-x-[30px] max-tablet:grid-cols-2 max-mobile:grid-cols-1 auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px] px-[1%]">
          {Array.from({ length: 3 }).map((val, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isProjectError) {
    return (
      <div className="w-full h-80 px-40 max-desktop:px-20 max-mobile:px-10">
        <ErrorHandler
          errorMessage={projectError?.message}
          queryKey={[endPoints.projectList]}
        />
      </div>
    );
  }

  if (isProjectFilterError) {
    return (
      <div className="w-full h-80 px-40">
        <ErrorHandler
          errorMessage={projectFilterError?.message}
          queryKey={[endPoints.projectList]}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[700px]">
      <div className="grid grid-cols-3 max-desktop:gap-x-[30px] max-tablet:grid-cols-2 max-mobile:grid-cols-1 mx-auto auto-rows-auto mt-16 gap-x-[60px] gap-y-[30px]">
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
