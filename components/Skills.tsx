import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
 

type Props={}

function Skills({}:Props) {
  return (
    <motion.div
    initial={{ opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:1.3}}

    
    
    className='h-screen  relative flex flex-col text-center px-5 md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>Skills</h3>

       
       <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
   
       <div className='grid grid-cols-4 gap-5 max-sm:overflow-x-scroll overflow-y-hidden py-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-inherit'>
        <Skill img='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png' percentage="90%"/>
        <Skill img='https://cdn.iconscout.com/icon/free/png-256/css3-9-1175237.png'percentage='90%'/>
        <Skill img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png' percentage="70%"/>
        <Skill img='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/800px-Tailwind_CSS_Logo.svg.png' percentage="85%"/>
        <Skill img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' percentage="85%"/>
        <Skill img='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' percentage="70%"/>
        <Skill img='https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png' percentage="70%"/>
        

        
       </div>
    </motion.div>
  )
}

export default Skills
