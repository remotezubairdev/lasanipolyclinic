'use client'
import React, { useState } from 'react'
import LinkBtn from './LinkBtn';
import { BiCross } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

const Alert = () => {
    const [open, setOpen] = useState(true);
  return (
    open ? (
        <div className='fixed right-0 bottom-0 md:right-[20px] md:bottom-[20px] bg-white border border-gray-300 shadow-md w-max md:p-3 rounded-lg p-2 z-100 '>
            <div>
                <div className='flex items-center justify-between'>
                <h3 className='font-semibold'>Timings:</h3>
                <RxCross2 className='cursor-pointer' size={20} onClick={() => setOpen(prev => !prev)} />
                </div>
                <p>
                    8PM-10PM Mon - Fri | Dr Imran
                </p>
                <p>
                    7PM-10PM Mon - Sat,
                    11AM-2PM Sunday | Dr Arifa
                </p>
            </div>

            <LinkBtn name='See who&apos;s available' path='/contact#availability' type='outline-sm' />
        </div>
    ) : ""
  )
}

export default Alert
