import search from "@/assets/icons/search.svg";
import { endPoints } from "@/constants";

import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/Button";
import { ListFilterSkeleton } from "./ListFilterSkeleton";
import { Spinner } from "@/components/ui/Spinner";
import { ErrorHandler } from "@/components/ErrorHandler";
import { useCategories } from "../hooks/useFetchHooks";

export const ListFilterContent = ({
  selectedCategoryId,
  handleChangeCategoryValue,
  searchValue,
  handleChangeSearchValue,
  isSearching,
}) => {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useCategories();

  const handleSearchChange = (e) => {
    const value = e.target.value.replace(/[^a-z|0-9| ]/gi, "");
    handleChangeSearchValue(value);
  };

  if (isCategoriesLoading) return <ListFilterSkeleton />;

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <InputField
        variant="search"
        className="bg-search-gray max-w-[785px] max-tablet:w-[500px] max-mobile:w-[385px] max-small-mobile:w-[300px] max-small-mobile:text-sm"
        placeholder="Find Projects..."
        value={searchValue}
        onChange={handleSearchChange}
        buttonOrIcon={<SearchIcon isSearching={isSearching} />}
      />
      {!isCategoriesError ? (
        <div className="flex mt-10 max-tablet:hidden">
          <Button
            className="mr-2.5 max-desktop:mr-1.5 max-desktop:text-md max-desktop:px-3 border-2 border-green"
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
                className="mr-2.5 max-desktop:mr-1.5 max-desktop:text-md max-desktop:px-3 border-2 border-green"
                variant={selectedCategoryId === id ? "default" : "outline"}
                size="sm"
                onClick={() => handleChangeCategoryValue(id)}
              >
                {title}
              </Button>
            );
          })}
        </div>
      ) : (
        <div className="w-full px-40 max-tablet:hidden">
          <ErrorHandler
            errorMessage={categoriesError?.message}
            queryKey={[endPoints.categories]}
          />
        </div>
      )}
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
