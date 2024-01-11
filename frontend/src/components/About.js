import React from 'react'
import ProfileSquare from '../assets/img/profile-square.png'
import ProfileRectangle from '../assets/img/profile-rectangle.jpg'
import MyCv from '../assets/myCV.pdf'
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='w-full h-fit font-poppins text-white mb-24' id='about'>
      <div className='flex flex-col items-center space-y-5'>
        <motion.span
        initial={{ scale:0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8
        }}
        viewport={{ once: true }}
        className='text-text text-sm lg:text-base'>Get to know me</motion.span>
        <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          delay: 0.2
        }}
        viewport={{ once: true }}
        className='text-4xl font-bold lg:text-5xl'>About Me</motion.span>
      </div>
      <div className='mt-20 flex flex-col items-center lg:flex-row box-border lg:items-start lg:px-20'>
        <img src={ProfileSquare} alt='profile' className='w-44 h-44 rounded-full md:w-64 md:h-64 lg:hidden'/>
        <img src={ProfileRectangle} alt='profile' className='hidden lg:block lg:max-w-[41%]'/>
        <div className='px-5 mt-10 space-y-5 md:px-10 lg:mt-0'>
            <p className='text-greenText lg:text-2xl'>Who am i?</p>
            <p className='text-2xl font-bold md:text-3xl lg:text-4xl'>I'm Satrio Utomo, Software Developer and Content Creator</p>
            <p className='text-text md:pb-5 '>I am a freelance software developer based in Indonesia and i have been building impressive software, which comply with the latest design trends. I help turn visions and ideas into meaningful and beneficial products. Having a keen eye for product evolution helps me prioritize tasks, iterate quickly, and ship faster.</p>
            <hr></hr>
            <div className='space-y-3 md:flex md:space-y-0 md:w-3/4 md:justify-between md:py-5 lg:w-full'>
                <div className='space-y-3'>
                    <p className='text-sm'>Name: <span className='ml-3 text-text'>Satrio Utomo</span></p>
                    <p className='text-sm'>Email: <a href='mailto:satrio.utomo130799@gmail.com' className='ml-3 text-greenText'>satrio.utomo130799@gmail.com</a></p>
                </div>
                <div className='space-y-3'>
                    <p className='text-sm'>Age: <span className='ml-3 text-text'>24</span></p>
                    <p className='text-sm mb-5'>From: <span className='ml-3 text-text'>Tangerang, Indonesia</span></p>
                </div>
            </div>
            <a href={MyCv} download='CV - SATRIO UTOMO' className='bg-greenText px-10 py-3 mt-11 rounded-full hover:scale-105 transition-all'>Download CV</a>
        </div>
      </div>
    </div>
  )
}

export default About