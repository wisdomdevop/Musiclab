import React, { useState } from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

const NavCom = () => {

    const [openNavigation, setOpenNavigation]= useState(false);
    const switchNav=()=> {
        setOpenNavigation(!openNavigation)
    }

          const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };
  return (
    <div className='bg-zinc-800 text-white font- fixed z-[100%] w-[100%] top-0 flex flex-col '>
        <section className={`flex lg:justify-around p-4 text-white justify-between ${openNavigation? "items-start": "items-center"} py-2`}>
            <div className={`${openNavigation? "mt-4": "mt-0"} lg:mt-0`}>
             <Link to='/'>   <img src="/logo.jpeg"  alt="" w- /></Link>
                
            </div>
              {/**laptop nav */}
            <div className='hidden lg:flex font-medium gap-10 text-base lg:text-lg mt-3 md:flex font-montserrat'>
                {navLinks.map((item)=> (
                    <Link to={item.url}key={item.id}>
                        {item.title}
                    </Link>
                ))}
            </div>



            <div className='hidden lg:flex font- md:block'>
                <button className='bg-gradient-to-r from-purple-400 via-blue-600 to-blue-400 py-5 rounded-full font-bold  text-base px-10 '>
                    Sign in
                </button>
            </div>
            <div className='flex lg:hidden  justify-end  h-[60px] gap- items-center gap-3  lg:ml-0 md:ml-0 md:hidden padAir:flex font-montserrat'>
                <button className='bg-gradient-to-r from-purple-400 via-blue-600 to-blue-400 rounded-full w-[80px] text-center font-montserrat md:text-base text-sm font-medium  h-[80%] md:w-[200px] padAir:w-[120px] hidden md:block padAir:block '>
                   <Link to='/signin'>Sign in</Link>
                </button> 

                <button onClick={switchNav}>
                    <img src="/menu.svg" alt="" />
                </button>
              
            </div>
        </section>

                    {/* mobile: sm nav */}
            {/* <div className={`${openNavigation? "flex  ": "hidden animate-slideUp"} lg:hidden  flex-col  justify-center mr-16 h-[400px] gap-10 font-bold  font-montserrat text-center items-center `}>
                {navLinks.map((item)=> (
                    <Link to={item.url}key={item.id} onClick={handleClick}>
                        {item.title}
                    </Link>
                ))}

            </div> */}

            <div className={`${openNavigation? "flex animate-slideIn": "hidden"}  items-center justify-center flex-col h-[300px] gap-5 font-montserrat font-medium text-base lg:hidden`}>

                 {navLinks.map((item)=> (
                    <Link to={item.url}key={item.id} onClick={handleClick}>
                        {item.title}
                    </Link>
                ))}
               

            </div>


            
        
    </div>
  )
}

export default NavCom