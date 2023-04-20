import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

export const ProgressBar = forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-[5px] w-full overflow-hidden rounded-full bg-[#D1F3ED]",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-green transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

ProgressBar.displayName = ProgressPrimitive.Root.displayName;
