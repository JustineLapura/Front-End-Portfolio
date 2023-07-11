import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center shadow-lg px-4 h-[80px] w-full'>
      <div className="">
            <h1 className='text-2xl font-bold text-blue-900'>Dental Clinic</h1>
      </div>
      <button className='py-1 px-5 rounded-lg font-bold duration-200 hover:scale-105 border-blue-900 bg-blue-900 text-white'>Logout</button>
    </div>
  )
}

export default Navbar
