import { useProjectList, useProjectListFilter } from "../hooks/useFetchHooks";
import { endPoints } from "@/constants";

import { ErrorHandler } from "@/components/ErrorHandler";
import { MultiButton } from "@/components/MultiButton";
import { CardSkeleton, ListCard, ListPagination, useListContent } from "@/features/list";

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

  const {
    currentPage,
    setCurrentPage,
    currentListData: currentProjectData,
    list: projectList,
  } = useListContent({
    selectedCategoryId,
    searchValue,
    normalList: projects,
    filteredList: projectFilteredList,
  });

  const handleCardButtonClick = () => {
    return null;
  };

  if (isProjectLoading || isProjectFilterLoading) {
    return (
      <div className="min-h-[700px]">
        <div className="grid grid-cols-3 max-desktop:gap-x-[30px] max-tablet:grid-cols-2 max-mobile:grid-cols-1 mx-auto auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px]">
          {Array.from({ length: 3 }).map((val, index) => (
            <CardSkeleton key={index} />
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
      <div className="grid grid-cols-3 max-desktop:gap-x-[30px] max-tablet:grid-cols-2 max-mobile:grid-cols-1 mx-auto auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px]">
        {currentProjectData?.map((project) => {
          return (
            <ListCard
              key={project?.id}
              element={project}
              footerButton={
                <MultiButton
                  buttonText="Donate now"
                  onClick={handleCardButtonClick}
                  title={project?.title}
                  id={project?.id}
                />
              }
            />
          );
        })}
      </div>
      {projectList ? (
        <ListPagination
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
