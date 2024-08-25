'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { navLinks } from '../constants'
import Link from 'next/link'
import LinkBtn from './LinkBtn'
import { IoMenu } from 'react-icons/io5'
import { ImCross } from 'react-icons/im'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`${menuOpen ? "flex-col" : ""} flex justify-between items-center border border-b-slate-300 shadow-sm px-16 py-6`}>
        <Link href="/">
            <Image
            width={200}
            height={50}
            alt='lasanipolyclinic-logo'
            src='/lasanipolyclinic-logo.png'
            />
        </Link>

        <nav className='md:flex hidden text-sm items-center gap-4 uppercase'>
            {
                navLinks.map(link => (
                    <Link key={link.name} href={link.path}>
                        {link.name}
                    </Link>
                ))
            }
            <div className='ms-2'>
                <LinkBtn type='outline' name="Contact Us" path='/contact' />
            </div>
        </nav>

        <nav className='md:hidden flex flex-col items-center gap-3 my-10 text-center'>
            {
                menuOpen ? (
                    <RxCross2 className='cursor-pointer hover:opacity-80' size={34} onClick={() => setMenuOpen(prev => !prev)} />
                ) : (
                    <IoMenu className='cursor-pointer hover:opacity-80' size={34} onClick={() => setMenuOpen(prev => !prev)} />
                )
            }
            {
                menuOpen ? (
                    <>
                {
                    navLinks.map(link => (
                        <Link key={link.name} href={link.path}>
                            {link.name}
                        </Link>
                    ))
                }
                    <div className='ms-2'>
                        <LinkBtn type='outline' name="Contact Us" path='/contact' />
                    </div>
                    </>
                ) : ""
            }
        </nav>
    </header>
  )
}

export default Navbar