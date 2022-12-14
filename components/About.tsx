import { type } from 'os'
import React from 'react'
import {motion} from 'framer-motion'

type Props={}

function About({}:Props) {
  return (
    <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5}}
    
          className=' relative h-screen flex flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
              <motion.img
              
                  initial={{
                    x:-200,
                    opacity:0
                  }}
                  whileInView={{
                    x:0,
                    opacity:1
                  }}
                  viewport={{once:true}}
                  transition={{
                    duration:1.2
                  }}
                  className='-mb-20  md:mb-0 flex-shrink-0 w-36 rounded-full object-cover  md:rounded-lg md:w-64 md:h-72 xl:w-[500px] xl:h-[500px] '
                  src='https://pbs.twimg.com/media/Fhx4LY_XoAMOlmk?format=jpg&name=small'>

              </motion.img >
              <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]'>little</span>  background</h4>
                <p className='text-base'>As a curious and technologically-inclined young man, I have always been captivated by the inner workings of complex systems and circuits. This fascination led me to study electrical engineering and sparked my recent interest in software engineering. I am now eagerly pursuing my newfound passion alongside my studies.</p>
              </div>
    </motion.div>
  )
}

export default About
{}