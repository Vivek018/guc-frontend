import { useState } from "react";
import { useDebounce } from "@/hooks/useDobounce";

import { ListFilterContent } from "@/features/list";
import { UserProjectListHeader } from "./UserProjectListHeader";
import { UserProjectListContent } from "./UserProjectListContent";


export const UserProjectList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { debouncedValue: debouncedSearchValue, loading: isSearching } =
    useDebounce(searchValue);

  return (
    <div className="w-full flex flex-col items-center p-3">
      <UserProjectListHeader />
      <ListFilterContent
        selectedCategoryId={selectedCategoryId}
        handleChangeCategoryValue={setSelectedCategoryId}
        searchValue={searchValue}
        handleChangeSearchValue={setSearchValue}
        isSearching={isSearching}
      />
      <UserProjectListContent
        selectedCategoryId={selectedCategoryId}
        searchValue={debouncedSearchValue}
      />
    </div>
  );
};
