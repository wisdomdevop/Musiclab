import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import ComplaintForm from '../components/ComplaintForm'

const Help = () => {
  return (
    <div>
        <section>
            <Navbar/>
        </section>
        <section className='py-36 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <h1 className='text-lg  font-poppins font-semibold w-[70%] mx-auto padAir:text-2xl text-center'>Encountering any issues? No worries, we're here to help!</h1>
                <div>
                    <h2 className='font-poppins text-xl font-medium w-[77%] mx-auto text-center'>
                        Please don't hesitate to reach out to us at MusicLab@support.com Our dedicated support team is ready to assist you with any questions or concerns you may have. Your satisfaction is our priority, and we strive to ensure you have the best experience possible with Music lab.
                    </h2>
                </div>

                <button className='p-5 rounded-2xl font-montserrat font-medium bg-black text-white'>
                    <a href="mailto:musiclab@support.com">Click here</a>
                </button>
            </div>
        </section>

        <section className='font-montserrat'>
        <ComplaintForm/>
        </section>

        <section className='mt-36'>
            <Footer/>
        </section>
    </div>
  )
}

export default Help