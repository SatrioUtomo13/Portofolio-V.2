import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='w-full h-screen font-poppins flex flex-col justify-center items-center text-white -mt-24' id='hero'>
      <span className='font-bold text-5xl md:text-7xl'>Satrio Utomo</span>
        <div className='text-xs mt-8 font-medium md:text-sm'>
            <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'I Am Software Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I Am Freelancer',
                1000,
                'I Am Content Creator',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            />
        </div>
    </div>
  )
}

export default Hero
