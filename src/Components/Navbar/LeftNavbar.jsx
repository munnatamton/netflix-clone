import React from 'react'
import { Link } from 'react-router-dom'

const LeftNavbar = () => {
  return (
    <div>
      <ul className='flex items-center space-x-5'>
          <li><img src="logos/NetflixLogoSvg.png" className="h-[30px] " alt="netflix-logo"/></li>
          <li className=''><Link to="/">Home</Link></li>
          <li><Link to='TvShows'>TV Shows</Link></li>
          <li><Link to='Movies'>Movies</Link></li>
          <li><Link to='Popular'>New & Popular</Link></li>
          <li><Link to='MyList'>My List</Link></li>
          <li><Link to='Browse'>Browse by Languages</Link></li>
      </ul>
    </div>
  )
}



export default LeftNavbar