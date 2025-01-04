import { Bell, User } from 'lucide-react'
import React from 'react'

const Header = ({title}) => {
  return (
      <header className='bg-opacity-50 backdrop-blur-md show-lg'>
      <div className='flex justify-between pt-4 mx-auto max-w-7xl sm:px-6 '>
        <div>
        <h1 className='text-2xl font-semibold text-gray-700'>{title}</h1>    
        </div>
        <div className='flex justify-between'>
        <div className="inline-flex items-center justify-center p-2 bg-blue-500 rounded-full shadow-xl cursor-pointer">
        <User color="white" size={15} /><p className='px-2 text-xs'>sign in</p>
       </div>
        </div>
      </div>
      <div className='py-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <h2 className='text-xl text-gray-500'>Welcome <span className='text-pink-400'>Kushal</span> to your dashboard</h2>

      </div>
      

      
      {/* <div>
        <input type="text"/>
      </div> */}
      </header>

  )
}

export default Header
