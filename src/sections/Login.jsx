import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from '../components/Firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';



const Login = () => {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("")
    const handleSubmit= async(e)=> {
        e.preventDefault();

        try { 
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully");
            window.location.href="/stream"
            toast.success("User logged in Successfully", {
                position:"top-center"
            })
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position:"bottom-center",
                
              
            })
        }
    }
  return (
    <>

    <section>
        <Navbar/>
    </section>
    
    
    <form className='flex flex-col animate-slideIn items-center justify-center mt-36 shadow-3xl lg:w-[40%] w-[70%] lg:h-[450px] h-[100%] mx-auto lg:p-0 p-8 text-center lg:rounded-full rounded-2xl py-24 ' onSubmit={handleSubmit}>
        <h3 className='font-bold text-xl lg:text-2xl mb-12'>Login</h3>

        

        <div className='mb-3'>
            {/* <label >Email</label> */}
            <input type="email" 
            value={email}
            className='border lg:p-4 rounded-xl font-medium text-base lg:text-lg outline-none border-slate-600 mb-6 p-2'
            placeholder='Email Address'
            onChange={(e)=> setEmail(e.target.value)}
            required />
        </div>

        <div className='mb-3'>
            {/* <label >Password</label> */}
            <input type="password" 
            value={password}
            className=' border p-2 rounded-xl font-medium text-base lg:text-lg outline-none border-slate-600 mb-6 lg:p-4'
            placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)}
            required />
        </div>

        <div className='mx-auto'>
            <button type='submit' className='hover:bg-white hover:text-purple-800 font-bold py-2 px-4 rounded-full bg-purple-500 text-white transition duration-300 w-'>Submit</button>
        </div>
        <div className='text-xs lg:text-sm text-center mt-6 font-semibold font'>
            dont have an account? <Link to='/register' className='text-purple-600'>Sign Up</Link>
        </div>

        <ToastContainer/>

       
    </form>

    </>
  )
}

export default Login