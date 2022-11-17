import React from 'react'
import {motion} from 'framer-motion'
type Props={
    directionLeft?:boolean;
};

function Skill({directionLeft}:Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial={{
            x: directionLeft?-200:200,
            opacity:0
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity:1,x:0
        }}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png'
        className='rounded-full p-2 border border-gray-500 object-cover w-24  xl:w-32 xl:h-32 filter group-hover:grayscale'
        
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:h-28 md:w-24 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100 '>100%</p>
            </div>
        </div>
      
    </div>
  )
}

export default Skill
