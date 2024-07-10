import React from 'react'

const Seam = () => {
  return (
    <div className='flex flex-col  gap-7 p-20 bg-zinc-100 text-black'>
        <h1 className='text-center font-bold text-2xl lg:text-4xl w-[70%] mx-auto'>
            Get ready for seamless online music
        </h1>
        <p className='w-[100%] lg:w-[50%] text-center mx-auto font-medium font-poppins text-base lg:text-lg '>Get ready for seamless online music that transforms your listening experience. With our platform, every note is just a click away, providing uninterrupted access to your favorite tracks. Immerse yourself in high-quality sound and enjoy a diverse library of songs tailored to your unique taste.
        </p>

        <div className='flex justify-around flex-col md:flex-row gap-10 padAir:flex-row flex-wrap mini:flex-row '> 
          <div className=' flex flex-col justify-center items-center
           gap-3'>
            <img src="/onlinemusic1.jpeg" alt="" />
            <h1 className='font-bold font-palanquin text-lg lg:text-xl '>
              Offline
            </h1>
            <p className='font-montserrat text-sm md:text-sm font-semibold'>
              Save and listen anywhere
            </p>
          </div>
          <div className=' flex flex-col justify-center items-center
           gap-3'>
            <img src="/onlinemusic2.jpeg" alt="" />
            <h1 className='font-bold font-palanquin text-lg lg:text-xl '>
              High quality audio
            </h1>
            <p className='font-montserrat text-sm md:text-sm font-semibold'>
              Enjoy the full range of sound
            </p>
          </div>
          <div className=' flex flex-col justify-center items-center
           gap-3'>
            <img src="/onlinemusic3.jpg" alt="" />
            <h1 className='font-bold font-palanquin text-lg lg:text-xl '>
              No ads
            </h1>
            <p className='font-montserrat text-sm md:text-sm font-semibold'>
              Enjoy nonstop music
            </p>
          </div>
          <div className=' flex flex-col justify-center items-center
           gap-3'>
            <img src="/onlinemusic4.jpg" alt="" />
            <h1 className='font-bold font-palanquin text-lg lg:text-xl '>
              Unlimited Skips
            </h1>
            <p className='font-montserrat text-sm md:text-sm font-semibold'> 
              Just tap skip
            </p>
          </div>
        </div>
    </div>
  )
}

export default Seam