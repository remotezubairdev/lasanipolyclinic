import React from 'react'
import { LinkBtnProps } from '../props/LinkBtnProps'
import Link from 'next/link'

const LinkBtn = ({ type, path, name, icon }: LinkBtnProps) => {
  return (
    <Link href={path} className={`${type === "outline" ? "bg-red-700 text-white rounded-xl md:px-5 md:py-4 p-3" : "text-gray-900 border border-gray-300 rounded px-3 py-2"} ${type === "outline-sm" ? "text-blue-700 font-semibold" : ""} w-fit md:text-sm text-[12px] inline-block hover:opacity-85 transition-[0.3s] flex items-center gap-3`}>
        {icon}
        <div>
          {name}
        </div>
    </Link>
  )
}

export default LinkBtn