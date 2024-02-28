import { ComponentProps, ReactNode } from "react";
import { twM } from "@/app/utils/twMerge";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode,
  className?: string,
}

export function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <button 
      type="submit"
      className={twM(`bg-mygreen-200 w-full justify-center px-4 py-3 text-white text-sm font-medium ring-1 ring-inset rounded-md cursor-pointer}`, className)}
      {...restProps}
    > 
      {children}
    </button>
  )
}
