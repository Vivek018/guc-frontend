import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const inputFieldVariants = cva(
  "bg-white flex justify-between items-center w-full px-1 mt-1",
  {
    variants: {
      variant: {
        outline: "h-11 border-2 rounded-md border-green",
        search: "h-16 rounded-search shadow-search",
        'send-email': "h-[52px] rounded-sm",
        'login-email': "bg-linear-gradient h-20 rounded-[20px] border-2 border-green",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

const inputVariants = cva(
  "bg-transparent outline-none flex-grow mx-2 h-8 text-md",
  {
    variants: {
      variant: {
        outline: "text-black",
        search: "text-gray mx-6 text-xl",
        'send-email': "text-black",
        'login-email': "bg-linear-gradient placeholder:text-white/80 text-white text-2xl font-semibold",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export const InputField = forwardRef(({ label = "", labelClassName, variant, type, name="name", className, inputClassName, buttonOrIcon, ...props }, ref) => {
    return (
      <>
      {label ? <InputLabel text={label} htmlFor={name} variant={variant} className={labelClassName} /> : null}
      <div className={cn(inputFieldVariants({variant, className}))}>
        <input
          name={name}
          type={type}
          className={cn(inputVariants({variant, inputClassName}))}
          ref={ref}
          {...props}
        />
        {buttonOrIcon}
      </div>
      </>
    );
  },
);

InputField.displayName = "InputField";

export const InputLabel = ({text, name, variant, className, ...props}) => {
  return (
    <label
        htmlFor={name}
        className={cn(
          "ml-1 font-medium text-sm", 
          variant === 'login-email' ? 'text-white text-2xl font-semibold' : null,
          className,
        )}
        {...props}
      >
        {text}
      </label>
  );
}

InputLabel.displayName = "InputLabel";
