import React from 'react'
import LinkBtn from './LinkBtn'
import Link from 'next/link'
import { FaWhatsappSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='mt-24'>
      <div className='max-w-3xl'>
        <h1 className='md:text-5xl font-bold text-black text-4xl'>
          Your Health, Our Priority <br/>
          Welcome to Lasani PolyClinic
        </h1>
        <p className='max-w-xl mt-3 text-sm text-gray-800'>
        We offer specialized care in both gynaecology and diabetes,
        led by an expert who is also a skilled General Physician. Our focus is on providing personalized, attentive
        care to support your overall health and well-being.
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