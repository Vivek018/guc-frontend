import { useState } from "react";
import { useDebounce } from "@/hooks/useDobounce";

import { ListFilterContent } from "@/features/list";
import { ProjectListHeader } from "./ProjectListHeader";
import { ProjectListContent } from "./ProjectListContent";


export const ProjectList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { debouncedValue: debouncedSearchValue, loading: isSearching } =
    useDebounce(searchValue);

  return (
    <div className="w-full flex flex-col items-center p-3">
      <ProjectListHeader />
      <ListFilterContent
        selectedCategoryId={selectedCategoryId}
        handleChangeCategoryValue={setSelectedCategoryId}
        searchValue={searchValue}
        handleChangeSearchValue={setSearchValue}
        isSearching={isSearching}
      />
      <ProjectListContent
        selectedCategoryId={selectedCategoryId}
        searchValue={debouncedSearchValue}
      />
    </div>
  );
};
