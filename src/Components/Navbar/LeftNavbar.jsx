import React from 'react'

const LeftNavbar = () => {
  return (
    <div>
    <ul className='flex items-center space-x-5 '>
        <li><img src="logos/NetflixLogoSvg.png" className="h-[30px]" alt="netflix-logo"/></li>
        <li className='hover:opacity-80'>Home</li>
        <li className='hover:opacity-80'>TV Shows</li>
        <li className='hover:opacity-80'>Movies</li>
        <li className='hover:opacity-80'>New & Popular</li>
        <li className='hover:opacity-80'>My List</li>
        <li className='hover:opacity-80'>Browse by Languages</li>
    </ul>
    </div>
  )
}

export default LeftNavbar