import React from 'react'

const LeftNavbar = () => {
  return (
    <div>
    <ul className='flex items-center space-x-5'>
        <li><img src="logos/NetflixLogoSvg.png" className="h-[30px]" alt="netflix-logo"/></li>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
    </ul>
    </div>
  )
}

export default LeftNavbar