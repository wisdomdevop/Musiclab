import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants';


const Fake = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
      const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };
            
    const switchNav=()=> {
        setOpenNavigation(!openNavigation)
    }
  return (
    <section className='fixed z-[1000px] w-[100%] top-0  '>
        <div>
            <nav className='flex bg-neutral-900 text-white justify-between p-5 lg:justify-around'>
                <div>
                    <Link to='/' className='lg:text-2xl font-bold lg:m-0 ml-3  '><img src="/logo.jpeg"/></Link>
                </div>
                <div className='lg:flex gap-10 hidden font-semibold'>
                    {navLinks.map((navLink )=> (
                        <Link to={navLink.url} key={navLink.id}>{navLink.title}</Link>
                    ))}
                </div>
                <div className={`${openNavigation? "flex": "hidden"} lg:hidden flex-col h-[400px] items-center justify-center gap-10 font-semibold mr-7` }>
                    {navLinks.map((item)=> (
                        <Link to={item.url} key={item.id} onClick={handleClick}>{item.title}</Link>
                    ))}
                    <button>
                        
                    </button>

                    {/* mobile phone nav */}
                </div>
                <div className='hidden lg:flex'>
                    <button className='bg-white text-black p-2 rounded-lg font-semibold'><Link to='/payment'>Get MemberShip Form</Link></button>
                </div>
                <button className='flex lg:hidden item justify-end mr-4'>
                    <img src="/menu.svg" alt="" onClick={switchNav}   />
                </button>
            </nav>
        </div>
    </section>
  )
}

export default Fake