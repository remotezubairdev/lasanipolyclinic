import React from 'react'
import Contact from '../components/Contact'
import Timings from '../components/Timings'
import Available from '../components/Available'
import LinkBtn from '../components/LinkBtn'

const page = () => {
  return (
    <main className='mt-12'>
      <LinkBtn name='<-- Back to Home' path='/' />
      <Available />
        <section className='flex flex-wrap items-center justify-between'>
          <Contact />
          <Timings />
        </section>
    </main>
  )
}

export default page
