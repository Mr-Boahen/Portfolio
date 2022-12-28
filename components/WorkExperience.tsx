import React from 'react'
import {motion} from 'framer-motion'
 type Props={}
function WorkExperience({}:Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly  mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl  '>Experience</h3>

      <div className='w-full mt-10 flex space-x-5 justify-center   overflow-hidden p-10 snap-x  snap-mandatory'>
      
    
   
        {/* ExperienceCards */}
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
            src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/yzwdvebtyrr7r9mxigc6' alt="" />
          
            <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>FRONTEND DEVELOPER FOR </h4>
            <p className='font-bold text-2xl mt-1'>PRIFINA INC.</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}

            </div>
            <p className='uppercase py-5  text-gray-300'>25th September 22 - 30th November 22</p>

   
     </div>
   </article>

        

      </div>
    </div>

  )
}

export default WorkExperience
