import React from 'react'

const Tender = () => {
  return (
    <div>
        <section className='flex flex-col md:flex-row justify-around p-10'>
            <div className='flex flex-col gap-6 '>
                <h2 className='font-bold font-poppins text-xl md:text-3xl lg:text-3xl'>
                    We are tender heart charity foundation.
                </h2>

                <div className='p-5 shadow-xl rounded-xl font-medium font-poppins'>
                    <img src="/finder.svg" alt="" />
                    <h3>Discover genres and playlists tailored for you.</h3>
                </div>

                <div className='p-5 shadow-xl rounded-xl font-medium font-poppins'>
                    <img src="/finder.svg" alt="" />
                    <h3>Share and enjoy personalized music recommendations</h3>

                </div>
                <div className='p-5 shadow-xl rounded-xl font-medium font-poppins'>
                    <img src="/finder.svg" alt="" />
                    <h3>
                        Experience seamless playback and superior sound quality
                    </h3>
                </div>
            </div>

            <div className='mt-10'>
                <img src="/about2.jpeg" alt="" />
            </div>
        </section>
    </div>
  )
}

export default Tender