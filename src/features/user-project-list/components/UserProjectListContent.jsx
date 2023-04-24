import { endPoints } from "@/constants";
import {
  useUserProjectList,
  useUserProjectListFilter,
} from "../hooks/useFetchHooks";

import { ErrorHandler } from "@/components/ErrorHandler";
import { MultiButton } from "@/components/MultiButton";
import {
  ListCardSkeleton,
  ListCard,
  ListPagination,
  useListContent,
} from "@/features/list";
import { useDisclosure } from "@/hooks/useDisclosure";
import { CertificateDialog } from "./CertificateDialog/CertificateDialog";

export const UserProjectListContent = ({ selectedCategoryId, searchValue }) => {
  const {
    data: userProjects,
    isLoading: isUserProjectLoading,
    isError: isUserProjectError,
    error: userProjectError,
  } = useUserProjectList();

  const {
    data: userProjectFilteredList,
    isLoading: isUserProjectFilterLoading,
    isError: isUserProjectFilterError,
    error: userProjectFilterError,
  } = useUserProjectListFilter(selectedCategoryId, searchValue, {
    enabled: !!selectedCategoryId || !!searchValue,
  });

  const {
    currentPage,
    setCurrentPage,
    currentListData: currentUserProjectData,
    list: userProjectList,
  } = useListContent({
    selectedCategoryId,
    searchValue,
    normalList: userProjects,
    filteredList: userProjectFilteredList,
  });

  const {
    isOpen: isOpenCertificate,
    open: openCertificate,
    close: closeCertificate,
  } = useDisclosure();

  if (isUserProjectLoading || isUserProjectFilterLoading) {
    return (
      <div className="min-h-[700px]">
        <div className="grid grid-cols-3 max-desktop:gap-x-[30px] max-tablet:grid-cols-2 max-mobile:grid-cols-1 mx-auto auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px]">
          {Array.from({ length: 3 }).map((val, index) => (
            <ListCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isUserProjectError) {
    return (
      <div className="w-full h-80 px-40 max-desktop:px-20 max-mobile:px-10">
        <ErrorHandler
          errorMessage={userProjectError?.message}
          queryKey={[endPoints.userProjectList]}
        />
      </div>
    );
  }

  if (isUserProjectFilterError) {
    return (
      <div className="w-full h-80 px-40">
        <ErrorHandler
          errorMessage={userProjectFilterError?.message}
          queryKey={[endPoints.userProjectList]}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[700px]">
      <div className="grid grid-cols-3 max-desktop:gap-x-[30px] max-tablet:grid-cols-2 max-mobile:grid-cols-1 mx-auto auto-rows-fr mt-16 gap-x-[60px] gap-y-[30px]">
        {currentUserProjectData?.map((userProject) => {
          return (
            <ListCard
              key={userProject?.id}
              element={userProject}
              footerButton={
                <MultiButton
                  buttonText="View Certificate"
                  onClick={openCertificate}
                  title={userProject?.title}
                  id={userProject?.id}
                />
              }
            />
          );
        })}
      </div>
      {userProjectList ? (
        <ListPagination
          currentPage={currentPage}
          totalCount={userProjectList?.length}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <></>
      )}
      <CertificateDialog
        isOpenCertificate={isOpenCertificate}
        closeCertificate={closeCertificate}
      />
    </div>
  );
};
