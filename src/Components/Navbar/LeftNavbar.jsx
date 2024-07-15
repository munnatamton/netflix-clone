import React from 'react'
import { Outlet } from 'react-router-dom'

const LeftNavbar = () => {
  return (
    <>
    <div>
    <ul className='flex items-center space-x-5'>
        <li><img src="logos/NetflixLogoSvg.png" className="h-[30px]" alt="netflix-logo"/></li>
        <li><link to="/">Home</link></li>
        <li><link to='NoPage'>TV Shows</link></li>
        <li><link to='NoPage'>Movies</link></li>
        <li><link to='NoPage'>New & Popular</link></li>
        <li><link to='NoPage'>My List</link></li>
        <li><link to='NoPage'>Browse by Languages</link></li>
    </ul>
    </div>
    <Outlet/>
    </>
  )
}



export default LeftNavbar