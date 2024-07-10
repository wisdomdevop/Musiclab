import React from 'react'
import { Link } from 'react-router-dom'

const Price = () => {
  return (
    <section className='py-24'>
        <div className='gap-10 flex flex-col'>
            <h1 className='text-xl mini:text-2xl md:text-3xl  font-bold text-center w-[70%] mx-auto'>
                Listen free or subscribe to
                MusicLab Premium.
            </h1>
            <p className='text-base font-montserrat text-center mini:text-lg w-[80%] mx-auto '>
                
            Enjoy unlimited access to MusicLab by listening for free or subscribing to MusicLab Premium. Discover a vast library of tracks, curated playlists, and exclusive content. Elevate your music experience with our seamless and immersive platform, designed to cater to your unique tastes.
            </p>

            <div className='flex justify-around flex-col padAir:flex-row items-center gap-10'>
                <div className='w-[80%] md:w-[30%] shadow-3xl p-8 font-poppins font-medium hover:bg-zinc-800 hover:text-white group rounded-xl flex flex-col justify-center'>
                    <h1 className='text-xl mb-3 font-bold group-hover:'>
                        MusicLab Free
                    </h1>
                    <p className='text-blue-600 text-lg gro'>
                        <span className='font-bold '>$0.00</span> month
                    </p>
                    <hr />

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" className='group-hover:text-white' />
                        <h1>
                            Online Listening
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1>
                            Access to a limited library of tracks.
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1>
                            Ad-supported listening experience.
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1>
                            Standard audio quality.

                        </h1>
                    </div>

                <div className='flex items-center gap-3 mt-4'>
                    <img src="/check.svg" alt="" />
                        <h1>
                            No offline downloads.
                        </h1>
                </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1>
                            30 skips per day 
                        </h1>
                    </div>

                          <div className='flex items-center gap-3 mt-4'>
                            <img src="/check.svg" alt="" />
                             <h1>
                                 Limited playlist creation.
                            </h1>
                        </div>



        


                    <button className='mt-10 w-[90%] text-center mx-auto  bg-gradient-to-r from-purple-400 via-blue-600 to-blue-400 rounded-lg px-3 py-3 group-hover:bg-transparent '>
                        <Link to='/login'>Get Free</Link>
                    </button>
                </div>


                <div  className='w-[80%] md:w-[30%] shadow-3xl p-8 font-poppins font-medium hover:bg-zinc-800 hover:text-white rounded-xl'>
                    <h1 className='text-xl mb-3 font-bold group-hover:'>
                        MusicLab Premium
                    </h1>
                    <p className='text-blue-600 text-lg gro'> <span className='font-bold'> $10.00 </span> month</p>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                            Unlimited access to a vast library of tracks.
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                            Ad-free listening experience.
                        </h1>
                    </div>
                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                           Offline mode for uninterrupted listening.
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                            Premium curated playlists and personalized recommendations.
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                            Exclusive access to new releases and concerts.
                        </h1>
                    </div>

                    <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                            High-definition audio quality.
                        </h1>
                    </div>
                        <div className='flex items-center gap-3 mt-4'>
                        <img src="/check.svg" alt="" />
                        <h1> 
                            Priority support and customer service.
                        </h1>
                    </div>

                    <button className='mt-10 w-[90%] text-center mx-auto  bg-gradient-to-r from-purple-400 via-blue-600 to-blue-400 rounded-lg px-3 py-3 group-hover:bg-transparent '>
                       <Link to='/payment'>Get Premium</Link> 
                    </button>


                </div>
            </div>
        </div>
    </section>
  )
}

export default Price