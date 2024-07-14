import React from 'react'

const RightNavbar = () => {
  return (
    <div className=''>
        <ul className='flex items-center space-x-5 '>
        <li className='hover:opacity-80'><img src="logos/Search.png" alt="Search" /></li>
        <li className='hover:opacity-80'>Children</li>
        <li className='hover:opacity-80'><img src="logos/NotificationBell.png" alt="Bell" /></li>
        <li className='hover:opacity-80'><img src="logos/ProfileIMG.png" alt="Profile" /></li>
        <li className='hover:opacity-80'><img src="logos/DownArrow.png" alt="Arrow" /></li>

        </ul>
    </div>
  )
}

export default RightNavbar