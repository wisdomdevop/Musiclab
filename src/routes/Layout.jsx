import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
      <section className='static w-[100%] h-screen'>
        <Navbar/>
      </section>
      <section className=''>
        <Outlet/>
      </section>
    </div>
  )
}

export default Layout