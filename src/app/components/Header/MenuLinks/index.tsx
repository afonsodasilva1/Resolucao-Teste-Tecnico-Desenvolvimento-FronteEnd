import { NAVBAR_LINKS } from "@/app/constants/MenuLinks";
import { NextLink } from "@/app/components/NextLink";

export function MenuLinks() {
  return (
    <div className='w-max mt-auto h-full my-auto flex gap-10 justify-start'>
      <>
        {NAVBAR_LINKS.map(link => (
          <NextLink
            key={link.href}
            href={link.href}
            children={link.text}
          />
        ))}</>
    </div>
  )
}
