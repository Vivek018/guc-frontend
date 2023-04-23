import { Skeleton } from "@/components/ui/Skeleton";

export const ListFilterSkeleton = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <Skeleton className="py-8 rounded-full w-[785px] max-tablet:w-[500px] max-mobile:w-[385px] max-small-mobile:w-[300px] max-small-mobile:text-sm" />
      <div className="flex mt-10 max-tablet:hidden">
        {Array.from({ length: 10 }).map((val, index) => (
          <Skeleton
            key={index}
            className=" mr-2.5 px-12 py-5 rounded-3xl max-desktop:mr-1.5 max-desktop:text-md max-desktop:px-10"
          />
        ))}
      </div>
    </div>
  );
};
