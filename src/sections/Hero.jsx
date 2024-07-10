import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col  gap-7 pb-8 w-[80%] mx-auto'>
        <p className='text-zinc-400 text-lg font-montserrat'>
            intuitive. Powerful. Runs Everywhere
        </p>
        <h1 className='lg:text-5xl font-montserrat font-bold text-2xl w-[100%] promax:text-xl lg:w-[60%] mx-auto animate-slideUp'>
            Open the World of Music . it's all here
        </h1>

        <div className='flex lg:flex-row justify-center gap-7 flex-col items-center'>
            <button className='px-5 py-3 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-blue-400 font-montserrat animate-slideIn'>
                Download For Desktop
            </button>
            <button className='px-5 py-3 rounded-full bg-zinc-400 font-montserrat text-white hover:bg-gradient-to-r from-purple-400 via-purple-600 to-blue-400 animate-slideIn'>
                Download for Mobile
            </button>
        </div>

        <div className='w-[100%] lg:w-[100%] mx-auto '>
            <img src="/hero.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Hero