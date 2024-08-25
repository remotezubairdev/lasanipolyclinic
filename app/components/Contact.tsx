import React from 'react'
import ContactCard from './contact-components/ContactCard'
import { contacts } from '../constants'

const Contact = () => {
  return (
    <div className='flex flex-col md:items-start items-center py-12'>
        <h3 className='font-semibold text-2xl p-3 text-center'>Contact Us</h3>
        <div className='flex flex-wrap justify-center items-center gap-12'>
            {
                contacts.map(contact => (
                    <ContactCard key={contact.name} contact={contact.contactPath} image={contact.image} name={contact.name} jobTitle={contact.jobTitle} />
                ))
            }
        </div>
    </div>
  )
}

export default Contact