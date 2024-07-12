import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-black text-white px-6 py-6 font-medium text-sm'>
        <ul className='flex space-x-5'>
            <li><img src="./NetflixLogoSvg.png" alt="netflix-logo"/></li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar