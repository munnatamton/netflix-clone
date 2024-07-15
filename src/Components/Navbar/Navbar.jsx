import React from 'react'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-black text-smokewhite px-6 py-6 text-xl font-medium font-primary'>
      <LeftNavbar/>
      <RightNavbar/>
    </div>

    </>
  )
}




export default Navbar