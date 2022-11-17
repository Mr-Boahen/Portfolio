import React from 'react'
import ExperienceCard from './ExperienceCard'
 type Props={}
function WorkExperience({}:Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly  mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl  '>Experience</h3>

      <div className='w-full mt-10 flex space-x-5 overflow-scroll overflow-y-hidden scrollbar-track-gray-400 scrollbar-thumb-[#f7ab0a] scrollbar-thin p-10 snap-x  snap-mandatory'>
        {/* ExperienceCards */}
        <ExperienceCard/>
        {/* ExperienceCards */}
        <ExperienceCard/>
        {/* ExperienceCards */}
        <ExperienceCard/>

        

      </div>
    </div>

  )
}

export default WorkExperience
