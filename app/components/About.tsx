import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='flex flex-col lg:flex-row gap-8 justify-between items-center py-16'>
      <div>
          <h2 className='font-semibold text-2xl'>About Us</h2>
          <p className='max-w-xl mt-6'>Lasani Poly Clinic is a dedicated healthcare facility in Lahore, focused on providing specialized medical care in gynecology and diabetes management. Our clinic is led by two expert specialists: a highly experienced gynecologist and a diabetes specialist who also serves as a general physician.</p>
      </div>

      <Image height={450} width={450} alt='healthcare_image' src='/healthcare.jpg' className='rounded-xl' />
    </section>
  )
}

export default About