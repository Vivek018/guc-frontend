import { Button } from "@/components/ui/Button";
import { usePagination } from "../hooks/usePagination";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import { DOTS } from "../constants";
import { cn } from "@/utils/cn";

export const ListPagination = ({
  setCurrentPage,
  totalCount,
  siblingCount = 1,
  currentPage,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return <></>;
  }

  const onNext = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = (event) => {
    event.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <div
      className={cn(
        "flex justify-center items-center mx-auto my-11 max-tablet:w-[500px] max-mobile:w-[385px] max-small-mobile:w-[320px]",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="text-green rounded-sm"
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        {currentPage !== 1 ? <img src={leftArrow} alt="left arrow" /> : null}
      </Button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              disabled={true}
              className="text-gray ml-2 w-2"
            >
              &#8230;
            </Button>
          );
        }
        return (
          <Button
            key={index}
            variant={pageNumber === currentPage ? "default" : "ghost"}
            size="icon"
            className={`${
              pageNumber !== currentPage ? "text-gray" : null
            } ml-2 max-mobile:ml-1 max-mobile:text-md max-mobile:w-4 max-mobile:h-4`}
            onClick={(e) => handlePageChange(e, pageNumber)}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        variant="ghost"
        size="icon"
        className="text-green ml-2"
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        {currentPage !== lastPage ? (
          <img src={rightArrow} alt="right arrow" />
        ) : null}
      </Button>
    </div>
  );
};
