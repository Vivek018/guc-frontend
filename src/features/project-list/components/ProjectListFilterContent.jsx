import { useState } from "react";
import { useCategories } from "../hooks/useFetchHooks";
import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/Button";
import search from "@/assets/icons/search.svg";
import { ProjectListFilterSkeleton } from "./ui/ProjectListFilterSkeleton";
import { Loader } from "@/components/ui/Loader";
import { Spinner } from "./ui/Spinner";

export const ProjectListFilterContent = ({
  selectedCategoryId,
  handleChangeCategoryValue,
  searchValue,
  handleChangeSearchValue,
  isSearching,
}) => {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();

  if (isCategoriesLoading) return <ProjectListFilterSkeleton />;

  const handleSearchChange = (e) => {
    handleChangeSearchValue(e.target.value.replace(/[^a-z|0-9| ]/gi, ""));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <InputField
        variant="search"
        className="bg-search-gray w-[785px]"
        placeholder="Find Projects..."
        value={searchValue}
        onChange={handleSearchChange}
        buttonOrIcon={<SearchIcon isSearching={isSearching} />}
      />
      <div className="flex mt-10">
        <Button
          className="mr-2.5 border-2 border-green"
          variant={!selectedCategoryId ? "default" : "outline"}
          size="sm"
          onClick={() => handleChangeCategoryValue(null)}
        >
          All
        </Button>

        {categories?.map(({ id, title }) => {
          return (
            <Button
              key={id}
              className="mr-2.5 border-2 border-green"
              variant={selectedCategoryId === id ? "default" : "outline"}
              size="sm"
              onClick={() => handleChangeCategoryValue(id)}
            >
              {title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const SearchIcon = ({ isSearching }) => {
  return isSearching ? (
    <Spinner />
  ) : (
    <img className="mr-6" src={search} alt="search icon" />
  );
};
