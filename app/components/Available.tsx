'use client'
import React from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Available = () => {
  const date = new Date();
  const currentDay = date.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6
  const currentHour = date.getHours();
  
  // Dr. Imran's Availability: 8PM-10PM (20:00-22:00) Mon - Fri
  const isDrImranAvailable = currentDay >= 1 && currentDay <= 5 && currentHour >= 20 && currentHour < 22;

  // Dr. Arifa's Availability: 7PM-10PM (19:00-22:00) Mon - Sat, 11AM-2PM (11:00-14:00) Sunday
  const isDrArifaAvailable =
    (currentDay >= 1 && currentDay <= 6 && currentHour >= 19 && currentHour < 22) || // Mon-Sat 7PM-10PM
    (currentDay === 0 && currentHour >= 11 && currentHour < 14); // Sunday 11AM-2PM

  return (
    <div id="availability" className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-bold text-center mb-4">Doctor Availability</h3>

      {/* Dr. Imran */}
      <div className="flex items-center justify-center mb-4">
        {isDrImranAvailable ? (
          <FaCheckCircle className="text-green-500 mr-2" />
        ) : (
          <FaTimesCircle className="text-red-500 mr-2" />
        )}
        <p className="text-lg font-semibold">
          {isDrImranAvailable
            ? 'Dr. Imran is available now.'
            : 'Dr. Imran is not available at this time.'}
        </p>
      </div>

      {/* Dr. Arifa */}
      <div className="flex items-center justify-center mb-4">
        {isDrArifaAvailable ? (
          <FaCheckCircle className="text-green-500 mr-2" />
        ) : (
          <FaTimesCircle className="text-red-500 mr-2" />
        )}
        <p className="text-lg font-semibold">
          {isDrArifaAvailable
            ? 'Dr. Arifa is available now.'
            : 'Dr. Arifa is not available at this time.'}
        </p>
      </div>

      {/* Show when they will be available next */}
      <div className="text-center text-gray-600 mt-6">
        <p className="font-semibold">
          Dr. Imran's Timings: 8PM-10PM Mon-Fri
        </p>
        <p className="font-semibold">
          Dr. Arifa's Timings: 7PM-10PM Mon-Sat, 11AM-2PM Sunday
        </p>
      </div>
    </div>
  )
}

export default Available;
