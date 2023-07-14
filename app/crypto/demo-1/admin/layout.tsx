import Sidebar from '@/components/DentalClinicComponents/Sidebar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen'>
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  )
}

export default layout
