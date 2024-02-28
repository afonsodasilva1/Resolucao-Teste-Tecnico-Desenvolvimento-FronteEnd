import Link from "next/link";

interface ActiveLinkProps {
  topic: string, 
  active?: boolean
}

export function ActiveLink({ topic, active }: ActiveLinkProps) {
  const activelink = active == true;

  return (
    <Link
      href="#"
      data-activelink={activelink}
      className=" text-mygray-500 w-[116px] h-[44px] text-[14px] px-6 py-2 flex-shrink-0 data-[activelink=true]:text-mygreen-800 data-[activelink=true]:font-semibold data-[activelink=true]:bg-mygreen-100 font-medium rounded-[6px] flex items-center justify-center hover:brightness-75 transition-colors"
    >
      <span>{topic}</span>

    </Link>
  )
}
