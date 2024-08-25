import React from 'react'
import Contact from '../components/Contact'
import Timings from '../components/Timings'
import Available from '../components/Available'

const page = () => {
  return (
    <main className='mt-12'>
      <Available />
        <section className='flex flex-wrap items-center justify-between'>
          <Contact />
          <Timings />
        </section>
    </main>
  )
}

export default page