import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import OEEcalculator from '../components/OEEcalculator';
import RevenueLossCal from '../components/RevenueLossCal';
import CostPerPieceCal from '../components/CostPerPieceCal';
import { ArrowUp, Camera, ChartNoAxesCombined, Search, User, UserRoundPlus } from 'lucide-react';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log("Selected Date:", e.target.value);
  };
  
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search Term:", e.target.value);
  };

  useEffect(() => {
    document.title = "MAQBIT - Dashboard"; 
  }, []);

  return (
    <div className="relative z-10 flex-1 my-2 overflow-auto bg-white">
      <Header title="Dashboard" />
      {/* <div className="p-4">
        <label htmlFor="dateInput" className="block text-sm font-medium text-gray-700">
          Select Date:
        </label>
        <input
          type="date"
          id="dateInput"
          className="block w-full p-2 mt-1 text-black border rounded"
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div> */}
    <div className="flex justify-end px-4">
  <input
    type="text"
    id="searchInput"
    placeholder="Search"
    className="block p-2 mt-1 text-black border rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
    value={searchTerm}
    onChange={handleSearchChange}
    
  />
</div>


      <div className="grid grid-cols-1 gap-6 mx-4 my-10 text-black sm:grid-cols-2 lg:grid-cols-3">
     
        <div className="p-3 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold ">Today's Users</h3>
            <div className="p-3 mt-5 bg-blue-500 shadow-xl rounded-xl">
              <User color="white" />
            </div>
          </div>
          <div className="flex justify-between ">
            <p className='font-medium'>
              2,000<span className="text-green-500"> +3%</span>
            </p>
          </div>
        </div>
        <div className="p-3 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold ">New Clients</h3>
            <div className="p-3 mt-5 bg-blue-500 shadow-xl rounded-xl">
            <UserRoundPlus color="white" />
            </div>
          </div>
          <div className="flex justify-between ">
            <p className='font-medium'>
              500<span className="text-red-400"> -5%</span>
            </p>
          </div>
        </div>

        <div className="p-3 bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold ">Today's Sales</h3>
            <div className="p-3 mt-5 bg-blue-500 shadow-xl rounded-xl">
            <ChartNoAxesCombined color="white" />
            </div>
          </div>
          <div className="flex justify-between ">
            <p className='font-medium'>
              $3,42,000<span className="text-green-500"> +20%</span>
            </p>
          </div>
        </div>
      </div>

      
      <div className='flex justify-between p-4'>
      <div className="p-3 bg-white rounded shadow">
          <label htmlFor="dropdown" className="block mb-2 text-sm font-medium text-gray-700">
            Select Machine:
          </label>
          <div className="relative">
            <select
              id="dropdown"
              className="px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-sm appearance-none focus:ring-1 focus:ring-white focus:border-blue-400 focus:outline-none"
            >
              <option value="option1">BOSCH SV200 A</option>
              <option value="option2">BOSCH SV200 B</option>
              <option value="option3">BOSCH SV200 C</option>
            </select>
            {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <label htmlFor="datepicker" className="block mb-2 text-sm font-medium text-gray-700">
            Select Date:
          </label>
          <div className="relative">
            <input
              id="datepicker"
              type="date"
              className="p-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-white focus:border-blue-400"
              onChange={handleDateChange}
              value={selectedDate}            />
          </div>
        </div>
      </div>
  
      <div className="grid grid-cols-1 gap-6 mx-4 my-10 text-black sm:grid-cols-2 lg:grid-cols-2">
        <div className="p-4 bg-white rounded shadow">
          <OEEcalculator />
        </div>
        <div className="p-4 bg-white rounded shadow">
          <RevenueLossCal />
        </div>
        <div className="p-4 bg-white rounded shadow">
          <CostPerPieceCal />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
