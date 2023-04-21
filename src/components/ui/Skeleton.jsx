import { cn } from "@/utils/cn";

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse opacity-[.35] rounded-sm bg-light-gray", className)}
      {...props}
    />
  );
};
