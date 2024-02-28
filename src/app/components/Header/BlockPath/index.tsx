import Link from 'next/link'
import { RoundedSeparator } from './RoundedSeparator'

interface BlockPathProps {
  path?: string,
  aditionalPath?: string,
}

export function BlockPath({ path, aditionalPath }: BlockPathProps) {
  return (
    <div className='w-full flex justify-start px-40 items-center text-gray-300 gap-6'>
      <Link href="#">{path}</Link>
      <RoundedSeparator />
      <Link href="#">{aditionalPath}</Link>
    </div>
  )
}
