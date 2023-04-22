import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import share from "@/assets/icons/share.svg";
import { formatDate, formatDifference } from "@/utils/format";
import { subDays } from "date-fns";
import { Skeleton } from "@/components/ui/Skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <div className="w-[330px] h-[544px] bg-white shadow-card font-dm-sans rounded-b-md">
      <div className="w-full h-52 overflow-hidden z-10">
        <Skeleton className="h-full z-0 object-fill rounded-none rounded-t-md" />
      </div>
      <div className="flex flex-col px-5 pt-4 pb-6 justify-start">
        <div className="flex justify-between text-md">
          <Skeleton className="px-10 py-2.5 text-light-gray" />
          <Skeleton className="px-12 py-2.5 text-green" />
        </div>
        <Skeleton className="w-0 px-20 py-3 mt-3 font-bold text-2xl font-poppins" />
        <Skeleton className="px-36 py-9 mt-3 text-md-line-height text-gray" />
        <Skeleton className="w-0 px-20 py-2.5 mt-6 text-gray text-lg" />
        <div className="mt-3" />
        <Skeleton className="px-36 py-3 mt-3 text-lg text-gray" />
        <div className="mt-6 flex gap-2">
          <Skeleton className="p-5" />
          <Skeleton className="px-[120.5px] py-5" />
        </div>
      </div>
    </div>
  );
};
