"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twM } from "@/app/utils/twMerge";

interface NextLinkProps {
  href: string;
  className?: string;
  children: string | ReactNode;
}

export function NextLink({ href, children, className }: NextLinkProps) {
  const path = usePathname();
  const activelink = children == "Users";

  return (
    <Link
      href={href}
      data-activelink={activelink}
      prefetch={true}
      className={twM(`w-max text-white-100 text-[16px] flex flex-col z-10 items-center justify-center  data-[activelink=true]:mx-10 data-[activelink=true]:text-mygreen-800 }`, className)}
      title={children?.toString()}
    >
      {activelink ?
        <>
          <svg width="173" className="-z-10 mt-[1.1rem] absolute" height="60" viewBox="0 0 173 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M138.915 0H34.0851C27.4577 0 22.0851 5.37033 22.0851 11.9977V38.4615C22.0851 57.4359 19.4559 60 0 60H173C153.544 60 150.915 57.4359 150.915 38.4615V11.9977C150.915 5.37033 145.542 0 138.915 0Z" fill="white" />
          </svg>
          <span className="z-10 text-mygreen-800 relative">{children}</span>
        </>
        :
        <span>{children}</span>
      }
    </Link >
  );
}
