import React from 'react'

const Listen = () => {
  return (
    <div className='bg-zinc-100 text-black'>
        <section className='flex justify-around items-center py-20 flex-col lg:flex-row md:flex-row w-[90%]'>
            <div className='lg:w-[40%] mb-5 w-[70%]'>
                <img src="/Listen.jpg" alt="" className='w-[100%]' /> 
            </div>
            <div className='flex flex-col gap-5 mt-4   mb-12 px-5'>
                <div className=''>
                <img src="/sound.jpg" alt="" width={67} className=' md:ml-0' />

                <h1 className='text-2xl font-montserrat lg:text-3xl font-medium lg:font-bold w-[80%]   mt-4 padAir:text-3xl padAir:font-bold '>Listen to a personalized mix of tracks</h1>                    
                </div>


                <div className='flex items-center gap-3 w-[80%] lg:w-[100%]'>
                    <img src="/one.svg" alt="" />
                    <h3 className='lg:text-lg font-poppins font-medium text-base md:text-lg padAir:text-lg  '>Enjoy music curated to your unique taste.</h3>
                </div>
                <div className='flex items-center gap-3 w-[80%] lg:w-[100%]'>
                    <img src="/two.svg" alt="" />
                    <h3 className='lg:text-lg font-poppins font-medium text-base md:text-lg padAir:text-lg '>Find new favorite songs effortlessly.</h3>
                </div>
                <div className='flex items-center gap-3 w-[80%] lg:w-[100%]'>
                    <img src="/three.svg" alt="" />
                    <h3 className='lg:text-lg font-poppins font-medium text-base md:text-lg padAir:text-lg '>
                         Non-stop music without the need to skip tracks.
                    </h3>
                </div>
            </div>
            <div>

            </div>
        </section>
    </div>
  )
}

export default Listen