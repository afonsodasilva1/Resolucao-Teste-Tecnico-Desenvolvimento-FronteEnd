import { ReactNode } from "react"

interface HeadingTextProps {
  children: string | ReactNode,
}
export function HeadingText({ children }: HeadingTextProps) {
  return (
    <h2>{children}</h2>
  )
}
