import React from 'react'
import { LinkBtnProps } from '../props/LinkBtnProps'
import Link from 'next/link'

const LinkBtn = ({ type, path, name }: LinkBtnProps) => {
  return (
    <Link href={path} className={`${type === "outline" ? "bg-red-700 text-white rounded-xl md:px-5 md:py-4 p-3" : "text-gray-900 underline"} ${type === "outline-sm" ? "text-blue-700 font-semibold" : ""} md:text-sm text-[12px] inline-block hover:opacity-85 transition-[0.3s]`}>
        {name}
    </Link>
  )
}

export default LinkBtn