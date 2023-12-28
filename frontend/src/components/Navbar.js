import React, { useState } from 'react'


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ToggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className='text-white bg-transparent text-2xl py-3 px-12 flex justify-between relative md:py-6 md:static md:px-20'>
        <a href='#' className='font-rubik md:text-4xl'>Satrio</a>

        <ul className='hidden text-lg font-poppins font-bold text-gray-200 w-1/2 justify-between items-center md:flex lg:w-2/5'>
          <li className='hover:text-white cursor-pointer'>
            <a href='#'>About</a>
          </li>
          <li className='hover:text-white cursor-pointer'>
            <a href='#'>Services</a>
          </li>
          <li className='hover:text-white cursor-pointer'>
            <a href='#'>Contacts</a>
          </li>
        </ul>

        <ul className={`text-base font-poppins font-semibold text-gray-200 p-3 pr-20 flex flex-col space-y-3 fixed bg-secondary right-14 top-14 ${isMenuOpen ? '' : 'hidden'}`}>
          <li className='hover:text-white cursor-pointer'>
            <a href='#'>About</a>
          </li>
          <li className='hover:text-white cursor-pointer'>
            <a href='#'>Services</a>
          </li>
          <li className='hover:text-white cursor-pointer'>
            <a href='#'>Contacts</a>
          </li>
        </ul> 

        <button className='md:hidden' onClick={ToggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
    </nav>
  )
}

export default Navbar
