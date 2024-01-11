import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

function Contacts() {
  return (
    <div className='w-full h-fit font-poppins text-white mb-10' id='contact'>
        <div className='flex flex-col items-center space-y-5'>
            <span className='text-text text-sm lg:text-base'>Feel free to contact me anytimes</span>
            <span className='text-4xl font-bold lg:text-5xl'>Get in Touch</span>
        </div>

        <div className='flex flex-col px-5 mt-20 md:px-10 lg:flex-row lg:justify-between'>
            <ContactForm/>

            <ContactInfo/>
        </div>
    </div>
  )
}

export default Contacts
