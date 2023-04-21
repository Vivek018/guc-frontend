import { Button } from "@/components/ui/Button";
import { usePagination } from "../hooks/usePagination";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import { DOTS } from "../constants";
import { cn } from "@/utils/cn";

export const ProjectListPagination = ({
  onPageChange,
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
    return null;
  }

  const onNext = (event) => {
    event.preventDefault();
    onPageChange(currentPage + 1);
  };

  const onPrevious = (event) => {
    event.preventDefault();
    onPageChange(currentPage - 1);
  };

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    onPageChange(pageNumber);
  }

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <div className={cn("flex justify-center items-center my-11", className)}>
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
              className="text-gray ml-2"
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
            } ml-2`}
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
