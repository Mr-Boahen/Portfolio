import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid';


type Props={}

function ContactMe({}:Props) {
  return (
    <div className='relative h-screen  flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 mx-auto text-2xl'>contact</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-cente0r mt-52'>
            I have got just What you need, 
            <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk</span>
        </h4>

        <div className='space-y-10 flex flex-col items-center '>
            <div className='flex items-center space-x-5 justify-center'>
                 
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+233241154017</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                 <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                 <p className='text-2xl'>Tema</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
                 
                 <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                 <p className='max-sm:text-lg sm:text-2xl'>emmanuelnyantakyiboahen@gmail.com</p>
                 </div>
        </div>

        <form className='flex sm:w-[81%] max-sm:w-[60%] flex-col space-y-2  mx-auto'>
            <div className='flex max-sm:flex-col sm:flex-row '>
                <input placeholder='Name' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 max-sm:mb-2 sm:mb-0 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]/40' type="text" />
                <input placeholder='Email' className='outline-none   bg-slate-400/10 rounded-sm border-b px-6 py-4 sm:ml-2 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]/40' type="email" />
            </div>
            <input placeholder='Subject' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]/40' type="text" />
            <textarea placeholder='Message' className='outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#f7ab0a]/40 focus:text-[#f7ab0a]/40 hover:border-[#f7ab0a]/40t'></textarea>
            <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
