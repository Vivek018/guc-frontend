import { Skeleton } from "@/components/ui/Skeleton";

export const ListCardSkeleton = () => {
  return (
    <div className="w-[330px] max-mobile:w-[330px] max-small-mobile:w-[280px] h-[544px] max-desktop:w-[280px] bg-white shadow-card font-dm-sans rounded-b-md">
      <div className="w-full h-52 overflow-hidden z-10">
        <Skeleton className="h-full z-0 object-fill rounded-none rounded-t-md" />
      </div>
      <div className="flex flex-col px-5 pt-4 pb-6 justify-start">
        <div className="flex justify-between text-md">
          <Skeleton className="px-10 py-2.5 text-light-gray" />
          <Skeleton className="px-12 py-2.5 text-green" />
        </div>
        <Skeleton className="w-0 px-20 py-3 mt-3 font-bold text-2xl font-poppins" />
        <Skeleton className="w-full py-9 mt-3 text-md-line-height text-gray" />
        <Skeleton className="w-0 px-20 py-2.5 mt-6 text-gray text-lg" />
        <div className="mt-3" />
        <Skeleton className="w-full py-3 mt-3 text-lg text-gray" />
        <div className="mt-6 flex gap-2">
          <Skeleton className="p-5" />
          <Skeleton className="w-full py-5" />
        </div>
      </div>
    </div>
  );
};
