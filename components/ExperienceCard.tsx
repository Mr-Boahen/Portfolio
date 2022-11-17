import React from 'react'
import {motion} from 'framer-motion'
 type Props={}
function ExperienceCard({}:Props) {
  return (
   <article className='flex flex-col rounded-lg items-center bg-[#272829] mt-20 space-y-7 flex-shrink-0 w-96 h-[600px] md:w-[500px] xl:w-[550px] snap-center p-10 hover:opacity-80 opacity-40 cursor-pointer transition-opactity duration-200 overflow-hidden '>
    <motion.img
     initial={{
        y:-100, 
        opacity:0,
     }}
     transition={{ duration:1.2}}
     whileInView={{opacity:1,y:0}}
     viewport={{once:true}}
     className=' w-32 h-32 rounded-full xl:w-[200px] object-cover object-center '
     src="https://s3-alpha.figma.com/hub/file/936981378/40fd9ce4-a7a2-468d-b87c-1dabb77298e2-cover.png" alt="" />
   
     <div className='px-0 md:px-10'>
     <h4 className='text-4xl font-light'>CEO OF Mr_Kaakyire</h4>
     <p className='font-bold text-2xl mt-1'>Mr_Kaakyire</p>
     <div className='flex space-x-2 my-2'>
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}

     </div>
     <p className='uppercase py-5  text-gray-300'>Started work... - Ended...</p>

     <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>
        <li>Summary Points</li>

     </ul>
     </div>
   </article>
  )
}

export default ExperienceCard
