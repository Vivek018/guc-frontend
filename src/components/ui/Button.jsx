import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "font-dm-sans h-11 flex justify-center items-center text-lg transition-all disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-green text-white hover:brightness-95 active:brightness-90",
        outline:
          "text-green bg-white border-2 border-green hover:brightness-95 active:brightness-90",
        ghost: "bg-transparent text-white hover:bg-green/40  active:bg-green/50 ",
      },
      size: {
        default: "w-32 px-4 py-1 rounded-2xl font-medium",
        sm: "px-4 py-1 rounded-3xl text-lg",
        md: "w-60 px-8 py-2 rounded-sm",
        hero: "w-44 px-4 py-2 rounded-2xl",
        icon: "w-11 p-3 rounded-sm text-2xl"
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
