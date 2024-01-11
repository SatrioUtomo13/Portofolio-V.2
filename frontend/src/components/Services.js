import React from 'react'
import { motion } from 'framer-motion';

function Services() {
  return (
    <div id='service'>
      <div className='w-full h-fit box-border px-5 font-poppins text-white mb-10 space-y-5 md:px-10 lg:px-20'>
        <motion.p
        initial={{ scale:0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8
        }}
        viewport={{ once: true }}
        className='text-sm text-text'>Services i offer to my clients</motion.p>
        <motion.h2 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 0.2
        }}
        viewport={{ once: true }}
        className='text-4xl font-bold'>My Services</motion.h2>
      </div>

      <div className='font-poppins mx-5 mb-24 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:mx-10 lg:mx-20 lg:grid-cols-3'>
        <div className='w-full h-fit text-white box-border bg-secondary space-y-5 px-10 py-9 hover:border-b-2 border-greenText transition-all duration-150 min-h-[300px] hover:-translate-y-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 stroke-greenText">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
          </svg>

          <h6 className='text-xl font-bold mb-3'>Web Development</h6>
          <p className='text-text text-sm'>Web development encompasses the creation of dynamic, user-centric websites, employing collaborative and versatile techniques.</p>
        </div>

        <div className='w-full h-fit text-white box-border bg-secondary space-y-5 px-10 py-9 hover:border-b-2 border-greenText transition-all duration-150 min-h-[300px] hover:-translate-y-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 stroke-greenText">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>

          <h6 className='text-xl font-bold mb-3'>Mobile Development</h6>
          <p className='text-text text-sm'>Mobile development involves creating agile and innovative applications that are immersive and user-focused.</p>
        </div>

        <div className='w-full h-fit text-white box-border bg-secondary space-y-5 px-10 py-9 hover:border-b-2 border-greenText transition-all duration-150 min-h-[300px] hover:-translate-y-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 stroke-greenText">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>

          <h6 className='text-xl font-bold mb-3'>Desktop Development</h6>
          <p className='text-text text-sm'>Desktop development involves crafting robust, platform-specific applications that are efficient and customizable.</p>
        </div>

        <div className='w-full h-fit text-white box-border bg-secondary space-y-5 px-10 py-9 hover:border-b-2 border-greenText transition-all duration-150 min-h-[300px] hover:-translate-y-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 stroke-greenText">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>

          <h6 className='text-xl font-bold mb-3'>Internet of Things</h6>
          <p className='text-text text-sm'>IoT is a transformative network of interconnected devices, employing smart, sensor-driven technology to automate processes.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
