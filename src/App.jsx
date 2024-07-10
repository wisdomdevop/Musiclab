import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Listen from './stream/Listen'
import Tender from './sections/Tender'
import Seam from './components/Seam'
import Footer from './sections/Footer'


function App() {


  return(
    
     <div className=' text-white bg-zinc-800 '>
        <section className='py-28'>
          <Navbar/>
        </section>

        <section className='text-center'>
          <Hero/>
        </section>

        <section>
          <Listen/>
        </section>
        <section className='bg-white text-black'>
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

export default App
