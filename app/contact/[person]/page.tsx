'use client';
import React from 'react';
import { contacts } from '@/app/constants';
import LinkBtn from '@/app/components/LinkBtn';
import Image from 'next/image';

interface ContactProps {
  params: {
    person: string;
  };
}

const Contact: React.FC<ContactProps> = ({ params }) => {
  // Find the contact details based on the ID from the URL
  const contact = contacts.find((_, index: number) => (index + 1).toString() === params.person);
  console.log(params)
  if (!contact) {
    return (
      <div className="p-8 text-center">
        <LinkBtn name='<- Back' path='/contact' />
        <h1 className="text-2xl font-bold">Contact Not Found</h1>
        <p>The contact you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="mt-24 min-h-screen">
      <LinkBtn name='<- Back to home' path='/' />
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact {contact.name}
      </h2>

      <div className="border max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        {contact.image && (
          <Image
          width={200}
          height={200}
            src={contact.image}
            alt={contact.name}
            className="object-cover mx-auto rounded-md mb-4"
          />
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {contact.jobTitle}
        </h3>
        <p className="text-gray-600 mb-4">
          <strong>Phone:</strong> {contact.phone}
        </p>
        <div className='flex items-center gap-6'>
          <LinkBtn name={`Call ${contact.name}`} path='tel:03344205510' type='outline' />
          <LinkBtn name='Check if they&apos;re available' path='/contact#availability' />
        </div>

      </div>
    </div>
  );
};

export default Contact;
