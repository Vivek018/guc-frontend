import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { ProjectListContent } from "./components/ProjectListContent";
import { ProjectListFilterContent } from "./components/ProjectListFilterContent";
import { ProjectListHeader } from "./components/ProjectListHeader";
import { useDebounce } from "./hooks/useDobounce";

export const ProjectList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const {debouncedValue: debouncedSearchValue, loading: isSearching} = useDebounce(searchValue);

  return (
    <div className="w-full flex flex-col items-center p-3">
      <ProjectListHeader />
      <ProjectListFilterContent
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
