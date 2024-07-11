import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
        <ol className='flex justify-between'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Filmler</li>
            <li>Diziler</li>
        </ol>
    </div>
  )
}

export default Navbar