import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { footerLinks } from '../constants'
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='px-16 my-6 py-4 border-t border-t-gray-300'>
      <div className='flex flex-row flex-wrap gap-y-4 items-center justify-between'>
        <h2 className='text-2xl font-semibold'>
          Thanks for visiting us
        </h2>
        <Image 
        width={200}
        height={50}
        alt='footer_logo_img'
        src='/lasanipolyclinic-logo.png'
        />
      </div>
      <div className='flex flex-wrap items-stretch gap-8 w-full md:mt-10 mt-3 text-black'>
          <ul className='text-sm w-fit flex flex-col items-start'>
            {
              footerLinks.map((link, index) => (
                <li key={link.name}>
                  <Link className={`${index === 0 ? "font-semibold" : ""}`} key={link.name} href={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className='flex flex-col justify-between gap-1 md:gap-2'>
            <div className='flex items-center gap-3'>
              <IoCall size={20} />
              0334 4205510
            </div>
            <div className='flex items-center gap-3 max-w-lg text-sm'>
              <FaLocationDot size={20} />
              316, E-1 Society, Johar Town Block E 1 Phase 1, Lahore, Punjab
            </div>
          </div>
          <span className='text-sm'>
            &copy; Copyright Lasani Polyclinic 2024
          </span>
      </div>
    </footer>
  )
}

export default Footer
