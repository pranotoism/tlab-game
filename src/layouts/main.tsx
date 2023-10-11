import React from 'react'

function MainLayout({children}: {children:React.ReactNode}) {
  return (
    <div className='px-[155px] pt-[40px]'>
      {children}
    </div>
  )
}

export default MainLayout