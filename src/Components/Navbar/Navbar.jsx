import React from 'react'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-black text-smokewhite px-6 py-6 text-xl font-medium font-primary'>
      <LeftNavbar/>
      <RightNavbar/>
    </div>
    <Outlet/>
    </>
  )
}




export default Navbar