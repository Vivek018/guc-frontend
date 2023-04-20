import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { ProjectListContent } from "./components/ProjectListContent";
import { ProjectListFilterContent } from "./components/ProjectListFilterContent";
import { ProjectListHeader } from "./components/ProjectListHeader";

export const ProjectList = () => {

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full flex flex-col items-center p-3">
      <ProjectListHeader />
      <ProjectListFilterContent
        selectedCategoryId={selectedCategoryId}
        handleChangeCategory={(id) => {
          setSelectedCategoryId(id);
        }}
        searchValue={searchValue}
        handleChangeSearchValue={(val) => {
          setSearchValue(val);
        }}
      />
      <ProjectListContent
        selectedCategoryId={selectedCategoryId}
        searchValue={searchValue}
      />
    </div>
  );
};
