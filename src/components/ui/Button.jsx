import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "h-11 flex justify-center items-center text-md hover:brightness-95 active:brightness-90",
  {
    variants: {
      variant: {
        default: "bg-green text-white",
        outline:
          "text-green bg-white border-2 border-green",
        ghost: "bg-transparent text-white hover:bg-gray/40",
      },
      size: {
        default: "w-32 px-4 py-1 pt-1.5 rounded-2xl font-medium",
        sm: "px-4 py-1 pt-1.5 rounded-3xl",
        md: "w-60 px-8 py-2 pt-2.5 rounded-xs",
        hero: "w-44 px-4 py-2 pt-2.5 rounded-2xl",
        icon: "w-11 p-3 pt-4 rounded-xs text-2xl"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const Button = forwardRef(({className, variant, size, ...props}, ref) => {

  return (
    <button 
      ref={ref} 
      className={cn(buttonVariants({variant, size, className}))} 
      {...props} 
    />
  );
});
