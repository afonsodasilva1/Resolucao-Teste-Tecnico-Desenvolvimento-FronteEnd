import React, { ReactNode } from 'react'

interface SelectProps {
  id: string,
  children: string | ReactNode,
  label: string,
  placeholder: string,
}
export function Select({ label, id, placeholder, children }: SelectProps) {
  return (
    <div className='w-full'>
      <label 
        htmlFor={id}
        className="text-[14px] text-myzinc-800 font-medium mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        list={"datalist"}
        placeholder={placeholder}
        className={'w-full h-10 bg-white-100 border  text-gray-900 text-sm rounded-md outline-none focus:border-mygreen-200 py-3 px-4 transition-all'}
      />
      <datalist id={"datalist"} className="mx-auto">
        {children}
      </datalist>
    </div>
  )
}