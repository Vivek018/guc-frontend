import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "h-11 flex justify-center items-center text-md transition-all outline-transparent",
  {
    variants: {
      variant: {
        default: "bg-green border-2 border-green text-white hover:brightness-95 active:brightness-90",
        outline:
          "text-green bg-white border-2 border-green hover:brightness-95 active:brightness-90",
        ghost: "bg-transparent text-white hover:bg-green/40  active:bg-green/50",
      },
      size: {
        default: "w-32 px-4 py-1 pt-1.5 rounded-2xl font-medium",
        sm: "px-4 py-1 pt-1.5 rounded-3xl",
        md: "w-60 px-8 py-2 pt-2.5 rounded-sm",
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
