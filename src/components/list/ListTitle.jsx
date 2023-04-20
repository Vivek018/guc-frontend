import { cn } from "@/utils/cn";

export const ListTitle = ({className, title, description, titleClassName}) => {
  return (
    <div className={cn("w-[555px] mt-24 px-4 flex flex-col items-center text-center tracking-[0.6px]", className)}>
      <h1 className={cn("uppercase text-5xl font-semibold tracking-[1.42px]", titleClassName)}>{title}</h1>
      {description}
    </div>
  );
};
