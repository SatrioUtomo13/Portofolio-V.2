import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const ToggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

  // use effect digunakan untuk mengontrol efek perubahan dari scroll
  useEffect(() => {
    // buat closure
    const handleScroll = () => {
      const position = window.scrollY // var untuk menampung nilai scroll
      setScrollPosition(position) // masukkan kedalam state
    }

    window.addEventListener('scroll', handleScroll, {passive:true}) // panggil event scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // remove event
    }
  })

  return (
    <nav className={`text-white text-2xl py-8 px-12 flex justify-between sticky top-0 md:py-6 md:px-20 transition-all duration-100 ${scrollPosition > 20 ? 'bg-secondary' : 'bg-transparent'}`}>
        <a href='#' className='font-rubik md:text-4xl'>Satrio</a>

        <ul className='hidden text-lg font-poppins text-gray-200 w-1/2 justify-between items-center md:flex lg:w-2/5'>
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

        <ul className={`text-base font-poppins text-gray-200 p-3 pr-20 flex flex-col space-y-3 fixed bg-secondary right-14 top-14 ${isMenuOpen ? '' : 'hidden'}`}>
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-w-9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
    </nav>
  )
}

export default Navbar
