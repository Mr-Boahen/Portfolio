import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import me from '../components/me.jpg'



type Props={};

function Hero({}:Props) {
    const [text,count]=useTypewriter({
        words:['"Hello World!"','"Mr_Boahen Here"','<Code_Blooded/>'],

        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-[1000px] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
       
      
        <BackgroundCircles/>
        <Image src={me} alt={''} className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        <div className='z-20'>
        <div className='text-5xl lg:text-6xl font-semibold px-10'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <span className='text-4xl font-mono '>{text}</span>
            <Cursor cursorColor='#f7ab0a'/>
        </div>
        <div className='pt-5'>
            <Link href='#about'>
                <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a] hover:text-[#f7ab0a]/40'>About</button>
            </Link>
                
           <Link href={'#experience'}>
           < button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a] hover:text-[#f7ab0a]/40'>Experience</button>

           </Link>
           <Link href={'#skills'}>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a] hover:text-[#f7ab0a]/40'>Skills</button>

           </Link>
           <Link href={'#projects'}>
            <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a] hover:text-[#f7ab0a]/40'>Projects</button>

           </Link>
        </div>
        </div>
       
    </div>
  )
}

export default Hero
