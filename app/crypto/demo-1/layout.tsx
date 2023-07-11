import Navbar from '@/components/DentalClinicComponents/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode})=> {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
      {children}
    </div>
  )
}

export default layout
