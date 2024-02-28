
import { Avatar as MantineAvatar } from "@mantine/core"

export function Avatar() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col text-white-100 items-end justify-center">
        <span className="text-[12px] leading-[18px] text-end">
          Marvin McKinney 
        <br />Admin</span>
      </div>
      <MantineAvatar className="bg-gray-300/10 cursor-pointer" radius="sm">
        <span className="text-white-100">
          M
        </span>
      </MantineAvatar>
    </div>
  );
}

//