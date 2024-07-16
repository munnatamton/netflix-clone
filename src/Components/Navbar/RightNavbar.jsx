import React from 'react'
import {Link} from 'react-router-dom'


const RightNavbar = () => {
  return (
    <div className=''>
        <ul className='flex items-center space-x-5'>
        <li><img src="logos/Search.png" alt="Search" /></li>
        <li><Link to="Children">Children</Link></li>
        <li><img src="logos/NotificationBell.png" alt="Bell" /></li>
        <li><img src="logos/ProfileIMG.png" alt="Profile" /></li>
        <li><img src="logos/DownArrow.png" alt="Arrow" /></li>

        </ul>
    </div>
  )
}

export default RightNavbar