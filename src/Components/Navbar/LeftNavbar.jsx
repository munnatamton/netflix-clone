import React from 'react'
import { Link } from 'react-router-dom'

const LeftNavbar = () => {
  return (
    <div>
      <ul className='flex items-center space-x-5'>
          <li><img src="logos/NetflixLogoSvg.png" className="h-[30px]" alt="netflix-logo"/></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to='no-page'>TV Shows</Link></li>
          <li><Link to='no-page'>Movies</Link></li>
          <li><Link to='no-page'>New & Popular</Link></li>
          <li><Link to='no-page'>My List</Link></li>
          <li><Link to='no-page'>Browse by Languages</Link></li>
      </ul>
    </div>
  )
}



export default LeftNavbar