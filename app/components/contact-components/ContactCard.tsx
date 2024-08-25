import React from 'react'
import LinkBtn from '../LinkBtn'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { ContactCardProps } from '@/app/props/ContactCardProps'
import Image from 'next/image'

const ContactCard = ({ contact, image, name, jobTitle } : ContactCardProps) => {
  return (
    <div className='flex flex-col items-center'>
        {
          image ? (
            <Image 
            width={200}
            height={200}
            alt='dr_imran'
            className='rounded-full w-[170px] h-[170px] object-cover'
            src={image}
            />
          ) : (
            <IoPersonCircleSharp size={200} color='#333333' />
          )
        }
        <h4 className='font-semibold text-md'>
            {name}
        </h4>
        <p className='text-sm'>
            {jobTitle}
        </p>
        <div className='mt-2'>
            <LinkBtn name={`Contact Now`} path={contact} />
        </div>
    </div>
  )
}

export default ContactCard