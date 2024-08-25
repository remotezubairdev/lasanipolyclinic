import React from 'react'
import LinkBtn from './LinkBtn'

const Services = () => {
  return (
    <div className='flex-1 flex flex-col gap-y-4 items-center text-center lg:text-start lg:items-end'>
      <h3 className='font-semibold text-2xl'>
        Comprehensive Healthcare at Lasani Poly Clinic
      </h3>
      <p className='max-w-xl'>
        Expert care in diabetes management, general health, and women's health. Our specialists offer personalized treatment to meet your needs.
      </p>
      <LinkBtn name='Learn More About Our Services' path='/services' type='outline' />
    </div>
  )
}

export default Services