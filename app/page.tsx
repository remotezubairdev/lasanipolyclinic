import React from 'react'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Location from './components/Location'
import About from './components/About'
import Services from './components/Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <Reviews />
      <About />
      <Location />
      <section className='flex lg:flex-row gap-8 flex-col items-center justify-between'>
        <Contact />
        <Services />
      </section>
    </div>
  )
}

export default Home