import React from 'react'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between bg-black text-smokewhite px-6 py-6 text-xl font-medium font-primary'>
      <LeftNavbar/>
      <RightNavbar/>
    </div>

    </>
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


export default Navbar