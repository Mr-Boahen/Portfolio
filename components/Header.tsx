import { type } from 'os';
import React from 'react';
import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion'


type Props={};
function Header({}:Props) {
  return (
   <header className='sticky top-0 p-5 flex item-start justify-between max-w-7xl mx-auto z-20 xl:bg-center'>
    <motion.div 
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration:1.3
        
    }}
     className='flex items-center'>
        {/* Social Icons */}
        <SocialIcon url="https://twitter.com/Mr_Kaakyire" 
        fgColor='gray'
        bgColor='transparent' />
        <SocialIcon url="https://www.linkedin.com/in/emmanuel-boahen-351850206/" 
        fgColor='gray'
        bgColor='transparent' />
        <SocialIcon url="https://github.com/Mr-Boahen/" 
        fgColor='gray'
        bgColor='transparent' />
        
    </motion.div>
    <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1

        }}
        transition={{
            duration:1.3
        }}

        className='flex items-center text-gray-300 cursor-pointer'>
        <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
    </motion.div>
   </header>
  )
}

export default Header
