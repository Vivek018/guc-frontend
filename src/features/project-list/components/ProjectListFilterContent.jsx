import { useState } from "react";
import { useCategories } from "../hooks/useFetchHooks";
import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/Button";
import search from "@/assets/icons/search.svg";

export const ProjectListFilterContent = ({
  selectedCategoryId,
  handleChangeCategory,
  searchValue,
  handleChangeSearchValue,
}) => {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();

  if (isCategoriesLoading) return null;

  const handleSearchChange = (e) => {
    handleChangeSearchValue(e.target.value);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <InputField
        variant="search"
        className="bg-search-gray w-[785px]"
        placeholder="Find Projects..."
        value={searchValue}
        onChange={handleSearchChange}
        buttonOrIcon={<img className="mr-6" src={search} alt="search icon" />}
      />
      <div className="flex mt-10">
        <Button
          className="mr-2.5 border-2 border-green"
          variant={!selectedCategoryId ? "default" : "outline"}
          size="sm"
          onClick={() => handleChangeCategory(null)}
        >
          All
        </Button>

        {categories.map(({ id, title }) => {
          return (
            <Button
              key={id}
              className="mr-2.5 border-2 border-green"
              variant={selectedCategoryId === id ? "default" : "outline"}
              size="sm"
              onClick={() => handleChangeCategory(id)}
            >
              {title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};