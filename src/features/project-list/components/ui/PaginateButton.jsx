import { forwardRef } from "react";
import { DOTS } from "../../constants";
import { Button } from "@/components/ui/Button";

export const PaginateButton = forwardRef(({ value, className }, ref) => {
  if (value === DOTS) {
    return <Button ref={ref} variant="ghost" size="icon" className="text-green rounded-sm items-end" >...</Button>;
  }
  return <Button ref={ref}>{value}</Button>;
});
