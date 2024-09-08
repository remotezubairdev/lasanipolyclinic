import React from 'react'
import Contact from '../components/Contact'
import Timings from '../components/Timings'
import Available from '../components/Available'
import LinkBtn from '../components/LinkBtn'
import { IoMdArrowRoundBack } from 'react-icons/io'

const page = () => {
  return (
    <main className='mt-12'>
      <LinkBtn icon={<IoMdArrowRoundBack size={20}/>} name='Back to Home' path='/' />
      <Available />
        <section className='flex flex-wrap items-center justify-between'>
          <Timings />
          <Contact />
        </section>
    </main>
  )
}

export default page
