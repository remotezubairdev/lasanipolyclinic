'use client'
import Link from 'next/link'
const Location = () => {
  return (
    <section id='location' className='flex flex-col md:flex-row-reverse gap-8 justify-between items-center py-16'>
      <div>
        <h2 className="font-semibold text-2xl">Where we're located</h2>
        <p className="max-w-xl mt-4">
          We're located in Johar Town, Lahore. To get a precise location for the polyclinic, please 
          click the <Link target='_blank' href="https://www.google.com/maps?ll=31.473812,74.289188&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=15619238557655416165" className="underline text-blue-600">View larger map</Link> link.
        </p>
      </div>
      <iframe loading="lazy" width={400} height={400} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lasani%20Poly%20Clinic+(Lasani%20Polyclinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </section>
  )
}

export default Location
