import React from 'react'
import Navbar from '../components/Navbar'
import HeroCom from '../components/HeroCom'
import Price from '../components/Price'
import Seam from '../components/Seam'
import Footer from '../sections/Footer'

const Pricing = () => {
  return (
    <div>
        <section className=''>
            <Navbar/>
        </section>
        <section className='text-center font-poppins'>
            <HeroCom  text="Pricing"/>
        </section>
        <section>
            <Price/>
        </section>
        <section>
            <Seam/>
        </section>

        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Pricing