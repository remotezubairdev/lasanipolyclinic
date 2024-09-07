import React from 'react';
import { contacts } from '@/app/constants';
import Link from 'next/link'; // Importing Next.js Link component
import LinkBtn from '@/app/components/LinkBtn';
import Image from 'next/image';

interface ContactProps {
  params: {
    person: string;
  };
}

const Contact: React.FC<ContactProps> = ({ params }) => {
  // Find the contact details based on the ID from the URL
  const contact = contacts.find(contact => contact.id === params.person); // Assuming each contact has a unique ID
  console.log(params);

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
      <LinkBtn name='<- Back' path='/contact' />
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact {contact.name}
      </h2>

      <div className="border max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        {contact.image && (
          <Image
            width={200}
            height={200}
            src={contact.image}
            alt={`Image of ${contact.name}`}
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
          <LinkBtn name={`Call ${contact.name}`} path={`tel:${contact.phone}`} type='outline' />
          <LinkBtn name='Check if they&apos;re available' path='/contact#availability' />
        </div>
      </div>

      {contact.name.toLowerCase() === "dr imran gardezi" ? (
        <p className='max-w-xl mt-3 text-sm text-gray-800'>
          For more information on diabetes management, visit the 
          <Link href="https://www.diabetes.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            American Diabetes Association
          </Link> 
          or explore guidelines from the 
          <Link href="https://www.who.int/health-topics/diabetes" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            World Health Organization
          </Link>.
        </p>
      ) : (
        <p className='max-w-xl mt-3 text-sm text-gray-800'>
          Learn more about women's health by visiting the 
          <Link href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            Mayo Clinic
          </Link> 
          or exploring resources from the 
          <Link href="https://www.acog.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            American College of Obstetricians and Gynecologists
          </Link>.
        </p>
      )}
    </div>
  );
};

export default Contact;
