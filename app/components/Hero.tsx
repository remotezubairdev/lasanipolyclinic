import React from 'react'
import LinkBtn from './LinkBtn'
import Link from 'next/link'
import { FaWhatsappSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='mt-24'>
      <div className='max-w-3xl'>
        <h1 className='md:text-5xl font-bold text-black text-4xl'>
          Lasani Polyclinic: Gyanaecologist <br />
          & Diabetes Specialist in Lahore
        </h1>
        <p className='max-w-xl mt-3 text-sm text-gray-800'>
        Our clinic provides a range of medical services focused on women's health and chronic conditions. With experienced specialists in both general medicine and women's care, we are dedicated to offering compassionate, personalized treatment to support your well-being.
        </p>
        <div className='flex items-center gap-5 mt-5'>
          <LinkBtn name='CONTACT US' path='/contact' type='outline' />
          <Link target='_blank' href="https://wa.me/+923344205510" className='md:text-sm text-[12px] flex items-center gap-1 border border-gray-300 md:p-2 p-1 hover:bg-gray-100 transition-[0.2s] rounded-xl'>
          <FaWhatsappSquare size={30} color='green' />Message via Whatsapp
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
