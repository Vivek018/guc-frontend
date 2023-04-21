import { clsx } from "clsx";
import { twMerge  } from "tailwind-merge";

// { "sds", "sds", ["sdfsf"]} => "sds sdfsf "

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}