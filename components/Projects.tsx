import React from 'react'
import {motion} from 'framer-motion'

type Props={};
function Projects({}:Props) {
    const projects=[1,2,3,4,5]
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.3}}
    className='h-screen relative flex overflow-hidden flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 mx- text-2xl'>Projects</h3>
    
     <div className='relative flex w-full overflow-x-scroll  overflow-y-hidden scrollbar-track-gray-400 scrollbar-thumb-[#f7ab0a] scrollbar-thin snap-x snap-mandatory z-20'>
        {/* Projects */}
        {/* Projects */}
        {projects.map((project,i)=>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
             initial={{ y:-300,opacity:0}}
             transition={{duration:1.2}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}}
        
            className='h-52'
            src="https://nbcpalmsprings.com/wp-content/uploads/sites/8/2022/07/Yy247gYvzaMZXprhZHXy4E.jpg?w=1120" alt="" />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#f7ab0a]/50'>Case Study {i+1} of {projects.length}</span>
                        {' '}
                        UPS clone
                    </h4>
                    <p className='text-lg text-center md:text-left'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium nulla enim officia atque cupiditate tempora eos, quod sapiente explicabo dolore ut nihil aperiam fugit. Ipsa porro ut vero illum delectus?
                    </p>
                </div>
            </div>
        ))}
        {/* Projects */}
        {/* Projects */}
     </div>

     <div className='w-full absolute top-[30%] bg-[#f7ab0a] opacity-10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects
