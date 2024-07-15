import React from 'react'

const LeftNavbar = () => {
  return (
    <div>
    <ul className='flex items-center space-x-5 '>
        <li><img src="logos/NetflixLogoSvg.png" className="h-[30px]" alt="netflix-logo"/></li>
        <li className='hover:opacity-80 active'><a href='#'>Home</a></li>
        <li className='hover:opacity-80'><a href='#'>TV Shows</a></li>
        <li className='hover:opacity-80'><a href='#'>Movies</a></li>
        <li className='hover:opacity-80'><a href='#'>New & Popular</a></li>
        <li className='hover:opacity-80'><a href='#'>My List</a></li>
        <li className='hover:opacity-80'><a href='#'>Browse by Languages</a></li>
    </ul>
    </div>
  )
}

const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all items
    listItems.forEach(li => li.classList.remove('active'));

    // Add 'active' class to the clicked item
    this.classList.add('active');
  });
});

export default LeftNavbar