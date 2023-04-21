import { cn } from "@/utils/cn";

export const Loader = ({className}) => {
  return (
    <div role="status" className="flex items-center justify-center">
      <Circle className={className} />
      <Circle className={cn("animation-delay-200", className)} />
      <Circle className={cn("animation-delay-400", className)} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

const Circle = ({className}) => {
  return <span className={cn("w-4 h-4 my-12 mx-2 bg-green rounded-full animate-loader", className)}></span>;
}
