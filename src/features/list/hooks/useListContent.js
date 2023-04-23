import { useEffect, useMemo, useState } from "react";
import { PAGE_SIZE } from "../constants";

export const useListContent = ({
  selectedCategoryId,
  searchValue,
  normalList,
  filteredList,
}) => {
  const [list, setList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategoryId, searchValue, setCurrentPage]);

  const currentListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return list?.slice(firstPageIndex, lastPageIndex);
  }, [list, currentPage]);

  useEffect(() => {
    if (!selectedCategoryId && !searchValue) {
      setList(normalList);
    } else {
      setList(filteredList);
    }
    return () => {
      setList(null);
    };
  }, [selectedCategoryId, searchValue, normalList, filteredList, setList]);

  return {
    currentListData,
    list,
    currentPage,
    setCurrentPage,
  };
};
