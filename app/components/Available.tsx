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
    <div id="availability" className="mt-6">
      <h3 className="text-2xl font-bold text-center mb-6">Doctor Availability</h3>

      {/* Availability Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Availability</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Next Available</th>
            </tr>
          </thead>
          <tbody>
            {/* Dr. Imran Row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dr. Imran Gardezi</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {isDrImranAvailable ? (
                  <span className="flex items-center text-green-500">
                    <FaCheckCircle className="mr-2" /> Available Now
                  </span>
                ) : (
                  <span className="flex items-center text-red-500">
                    <FaTimesCircle className="mr-2" /> Not Available
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8PM-10PM Mon-Fri</td>
            </tr>

            {/* Dr. Arifa Row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dr. Arifa Imran</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {isDrArifaAvailable ? (
                  <span className="flex items-center text-green-500">
                    <FaCheckCircle className="mr-2" /> Available Now
                  </span>
                ) : (
                  <span className="flex items-center text-red-500">
                    <FaTimesCircle className="mr-2" /> Not Available
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7PM-10PM Mon-Sat, 11AM-2PM Sun</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Available;
