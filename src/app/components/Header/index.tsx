"use client";

import { usePathname } from "next/navigation";
import { Logo } from './Logo'
import { MenuLinks } from './MenuLinks'
import { Avatar } from './Avatar'
import { BlockPath } from './BlockPath'
import { ActiveMenuLink } from "./MenuLinks/ActiveMenuLink";
import { RightHeaderIcons } from "./RightHeaderIcons";

export function Header() {
  const path = usePathname();

  return (
    <header className='w-full bg-mygreen-800 h-[151px] flex flex-col items-center fixed top-0 z-20'>
      <div className='w-full flex items-center h-full px-20'>
        <Logo />
        <div className='w-full flex items-center justify-between'>
          <MenuLinks />
          <div className='w-max flex items-center justify-center gap-4'>
            <RightHeaderIcons />
            <Avatar />
          </div>
        </div>
      </div>
      <div className='bg-white-100 w-full h-full flex'>
        {path == "/dashboard" ?
          <ActiveMenuLink />
          :
          <BlockPath
            path='Doctor'
            aditionalPath='Add a new doctor'
          />}
      </div>
    </header>
  )
}




