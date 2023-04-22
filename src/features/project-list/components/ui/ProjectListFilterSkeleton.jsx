import { Skeleton } from "@/components/ui/Skeleton";
import React from "react";

export const ProjectListFilterSkeleton = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <Skeleton className="px-96 py-8 rounded-full" />
      <div className="flex mt-10">
        {Array.from({ length: 10 }).map((val, index) => (
          <Skeleton key={index} className=" mr-2.5 px-12 py-5 rounded-3xl" />
        ))}
      </div>
    </div>
  );
};
