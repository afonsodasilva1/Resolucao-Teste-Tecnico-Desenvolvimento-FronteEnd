import { ReactNode } from "react"

interface HeadingListItemProps {
  children?: string | ReactNode,
}
export function HeadingListItem({ children }: HeadingListItemProps) {
  return (
    <h3 className="text-[14px] text-myzinc-800 font-[600px]">{children}</h3>
  )
}
