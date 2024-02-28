import Link from "next/link";
import { Button } from "@mantine/core";
import { UserPlus } from "lucide-react";

export function ListHeader() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">List of doctors</h1>
        <span className="text-gray-300">
          345 available doctors
        </span>
      </div>
      <Link href="/new_doctor">
        <Button
          className="w-[165px] h-[40px] text-[12px] rounded-[6px] bg-mygreen-200 text-white-100 font-medium hover:bg-mygreen-800 transition-colors"
          leftSection={<UserPlus size={18} className="text-white-100" />}
        >
          Add new doctor
        </Button>
      </Link>
    </div>
  )
}