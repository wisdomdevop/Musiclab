import React from 'react'
import HeroCom from '../components/HeroCom'
import Navbar from '../components/Navbar'
import Listen from '../stream/Listen'
import Tender from '../sections/Tender'
import Seam from '../components/Seam'
import Footer from '../sections/Footer'

const Features = () => {
    const rest= "Features"
  return (
    <div>

        <section className=''>
            <Navbar/>
        </section>
        <section className='text-white text-center'>
            <HeroCom text={rest}/>
        </section>
        <section>
            <Listen/>
        </section>
        <section>
            <Tender/>
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

export default Features