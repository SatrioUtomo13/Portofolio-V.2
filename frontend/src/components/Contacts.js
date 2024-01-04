import React from 'react'

function Contacts() {
  return (
    <div className='w-full h-fit font-poppins text-white mb-10'>
        <div className='flex flex-col items-center space-y-5'>
            <span className='text-text text-sm lg:text-base'>Feel free to contact me anytimes</span>
            <span className='text-4xl font-bold lg:text-5xl'>Get in Touch</span>
        </div>

        <div className='flex flex-col px-5 mt-20 md:px-10 lg:flex-row lg:justify-between'>
            <div className='mb-10 lg:w-[55%]'>
                <h4 className='text-[1.5rem] mb-5'>Message Me</h4>
                <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
                    <input type='text' placeholder='Name' className='w-full placeholder:text-text text-text bg-secondary py-3 pl-2 focus:outline-none focus:border-b-2 transition-all duration-150 focus:border-b-greenText'/>
                    
                    <input type='email' placeholder='Email' className='w-full placeholder:text-text text-text bg-secondary py-3 pl-2 focus:outline-none focus:border-b-2 transition-all duration-150 focus:border-b-greenText'/>
                </div>
                <input type='text' placeholder='Subject' className='w-full mt-6 placeholder:text-text text-text bg-secondary py-3 pl-2 focus:outline-none focus:border-b-2 transition-all duration-150 focus:border-b-greenText'/>
                <textarea placeholder='Message' rows='5' className='w-full mt-6 placeholder:text-text text-text bg-secondary py-3 pl-2 focus:outline-none focus:border-b-2 transition-all duration-150 focus:border-b-greenText'/>
                <button className='bg-greenText py-3 px-8 rounded-full cursor-pointer mt-5'>Send Message</button>
            </div>

            <div className='space-y-5 lg:w-[40%]'>
                <h4 className='text-[1.5rem]'>Contact Info</h4>
                <p className='text-sm text-text'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-4 stroke-greenText">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <div className='flex flex-col text-sm pl-4 py-4 border-l border-text'>
                            <h6>Name</h6>
                            <span className='text-text'>Satrio Utomo</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-4 stroke-greenText">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>


                        <div className='flex flex-col text-sm pl-4 py-4 border-l border-text'>
                            <h6>Location</h6>
                            <span className='text-text'>Tangerang, Indonesia</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-4 stroke-greenText">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>


                        <div className='flex flex-col text-sm pl-4 py-4 border-l border-text'>
                            <h6>Call Me</h6>
                            <span className='text-text'>+62 8881227665</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mx-4 stroke-greenText">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>

                        <div className='flex flex-col text-sm pl-4 py-4 border-l border-text'>
                            <h6>Email Me</h6>
                            <span className='text-text'>satrio.utomo130799@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts
