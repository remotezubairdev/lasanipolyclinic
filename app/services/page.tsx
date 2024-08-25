'use client';
import React from 'react';
import LinkBtn from '../components/LinkBtn';

const Services = () => {
  return (
    <div className="p-8 bg-gray-50" id="services">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Services at Lasani Polyclinic
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Diabetes Specialist / General Physician */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Imran</h3>
          <p className="text-gray-600 mb-4">
            Dr. Imran is a diabetes specialist and general physician, providing expert care for diabetes management and general medical conditions.
          </p>
          <ul className="text-gray-600 mb-4">
            <li key='diabetes'>✅ Diabetes Management</li>
            <li key='medical'>✅ General Medical Check-ups</li>
            <li key='hypertension'>✅ Hypertension Management</li>
            <li key='health'>✅ Health Screenings</li>
          </ul>
          <div className='self-end'>
            <LinkBtn name='Contact now' path='/contact/1' type='outline' />
          </div>
        </div>

        {/* Gynecologist */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Arifa</h3>
          <p className="text-gray-600 mb-4">
            Dr. Arifa is a gynecologist specializing in women's health, prenatal care, and other gynecological issues.
          </p>
          <ul className="text-gray-600 mb-4">
            <li key={1}>✅ Prenatal & Postnatal Care</li>
            <li key={2}>✅ Women's Health</li>
            <li key={3}>✅ Gynecological Examinations</li>
            <li key={4}>✅ Family Planning</li>
          </ul>
          <div className='self-end'>
            <LinkBtn name='Contact now' path='/contact/2' type='outline' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
