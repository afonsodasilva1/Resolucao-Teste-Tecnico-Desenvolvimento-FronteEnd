import { Button } from "@mantine/core"

interface ButtonStatusProps {
  status: "Approved" | "Declined",
}

export function ButtonStatus({ status }: ButtonStatusProps) {
  return (
    <Button
      variant="default"
      className={`w-max h-[26px] rounded-[6px] text-[11px] font-medium text-mygreen-200 ${status === "Approved" ? "bg-green-400/20 text-mygreen-200" : "bg-red-600/20 text-red-600 "} font-medium transition-all border-none`}
    >
      {status}
    </Button>
  )
}
