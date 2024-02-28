import { twM } from "@/app/utils/twMerge";
import { ReactNode } from "react";

interface InputGroupProps {
  children: ReactNode,
  className?: string,
}

export function InputGroup({ children, className }: InputGroupProps) {
  return (
    <div className={twM(`w-full flex justify-center items-center gap-3 mt-4`, className)}>
      {children}
    </div>
  )
}


