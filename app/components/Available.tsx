'use client';
import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Available = () => {
  const [date, setDate] = useState(new Date());
  const [currentDoctor, setCurrentDoctor] = useState("");
  const [availableDoctor, setAvailableDoctor] = useState(""); 

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      checkAvailability(); 
    }, 1000);

    return () => clearInterval(interval); 
  }, [date]);

  const timeToNumber = (hours: number, minutes: number) => hours * 100 + minutes;

  const checkAvailability = () => {
    const currentDay = date.getDay();
    const currentTime = timeToNumber(date.getHours(), date.getMinutes());

    let available = "";
    if (currentDay >= 1 && currentDay <= 5) {
      if (currentTime >= 2000 && currentTime <= 2200) {
        available = "Dr Imran";
      } else if (currentTime >= 1900 && currentTime <= 2200) {
        available = "Dr Arifa";
      }
    } else if (currentDay === 6) {
      if (currentTime >= 1900 && currentTime <= 2200) {
        available = "Dr Arifa";
      }
    } else if (currentDay === 0) {
      if (currentTime >= 1100 && currentTime <= 1400) {
        available = "Dr Arifa";
      }
    }

    setCurrentDoctor(available ? `${available} is available now.` : "No doctor is available currently.");
    setAvailableDoctor(available);
  };

  return (
    <div id="availability" className="md:p-4">
      <h3 className="text-2xl font-bold mb-4 text-center">Doctor Availability</h3>

      <div className="overflow-x-scroll">
        <table className="table-auto border-collapse border border-gray-300 w-full mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Dr Imran</th>
              <th className="border border-gray-300 px-4 py-2">Dr Arifa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Monday - Friday</td>
              <td className={`border border-gray-300 px-4 py-2 ${availableDoctor === 'Dr Imran' ? 'text-green-500' : ''}`}>
                8 PM - 10 PM {availableDoctor === 'Dr Imran' && <FaCheckCircle className="inline ml-2" />}
              </td>
              <td className={`border border-gray-300 px-4 py-2 ${availableDoctor === 'Dr Arifa' ? 'text-green-500' : ''}`}>
                7 PM - 10 PM {availableDoctor === 'Dr Arifa' && <FaCheckCircle className="inline ml-2" />}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Saturday</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className={`border border-gray-300 px-4 py-2 ${availableDoctor === 'Dr Arifa' ? 'text-green-500' : ''}`}>
                7 PM - 10 PM {availableDoctor === 'Dr Arifa' && <FaCheckCircle className="inline ml-2" />}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Sunday</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className={`border border-gray-300 px-4 py-2 ${availableDoctor === 'Dr Arifa' ? 'text-green-500' : ''}`}>
                11 AM - 2 PM {availableDoctor === 'Dr Arifa' && <FaCheckCircle className="inline ml-2" />}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-lg font-semibold text-center">
        {currentDoctor ? (
          <p className={`flex justify-center items-center ${currentDoctor.includes('available') ? 'text-green-500' : 'text-red-500'}`}>
            {currentDoctor.includes('available') ? <FaCheckCircle className="mr-2" /> : <FaTimesCircle className="mr-2" />}
            {currentDoctor}
          </p>
        ) : (
          <p>No doctor is available at the current time.</p>
        )}
      </div>
      <span className='text-sm'>*Please note that the time may vary</span>
    </div>
  );
};

export default Available;
