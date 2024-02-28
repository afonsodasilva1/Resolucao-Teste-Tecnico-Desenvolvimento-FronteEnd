import { twM } from "@/app/utils/twMerge";

export function RoundedSeparator({ className }: { className?: string}) {
  return (
    <div className={twM("w-2 h-2 bg-gray-300 rounded-full", className)}/>
  )
}
