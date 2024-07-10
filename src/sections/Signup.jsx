import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../components/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';


const Signup = () => {
    const [email, setEmail]= useState("")
    const [userName, setUserName]= useState("")
    const [password, setPassword]= useState("");
    const [genre , setGenre]= useState("")
    const [imgUrl, setImgUrl]= useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlI2tHK_QIdtAEfb9kr0L4MhxaL6dij2fc8g&usqp=CAU")

    const handleRegister= async(e)=> {
        e.preventDefault();
        
        try {
            await createUserWithEmailAndPassword(auth, email, password, genre, imgUrl, userName);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    userName: userName,
                    genre: genre,
                    imgURL: imgUrl,
                })
                window.location.href= "/login"
            }
            console.log(`${userName} registered successfully`);
            toast.success(`${userName} Registered Successfully`, {position: "top-center",})
            
        } catch (error) {
            console.log(error.message)
            toast.error(error.message, {
                position: "bottom-center"
            })
            
        }
    }
  return (
    <div>

        <section>
            <Navbar/>
        </section>
        <form onSubmit={handleRegister}
        className='flex flex-col items-center justify-center  bg-zinc-700 lg:w-100%] mx-auto  p-7 text-whit w-[100%] '>
            {/* wrapper down */}
            <div className='font-poppins text-sm padAir:text-base font-medium flex  flex-col gap-5 bg-white text-black mt-24 lg:w-[50%] w-[90%] p-10 rounded-3xl shadow-3xl shadow-gray-100 animate-slideIn justify-center items-center'>  

                <h3 className='text-3xl text-center'>
                    Sign Up
                </h3>
                <div className='flex gap-3 lg:w-[90%] w-[100%]   border p-3 rounded-2xl'>
                    <img src="/user.png" alt="" width={30}/>
                    <input type="text"
                     value={userName}
                     placeholder='Enter UserName'
                     onChange={(e)=> setUserName(e.target.value)}
                     required
                     className='outline-none w-[100%]'
                     />
                </div>

                <div className='flex gap-3 w-[100%] lg:w-[90%] border p-3 rounded-2xl'>
                    <img src="/email.svg" alt="" width={30}/>
                    <input type="email"
                     value={email}
                     placeholder='n@example.com'
                     onChange={(e)=> setEmail(e.target.value)}
                     required
                     className='outline-none w-[100%]'
                     />
                </div>

                <div className='flex gap-3 w-[100%] lg:w-[90%] text-center border p-3 rounded-2xl'>
                    <img src="/password.svg" alt="" width={30}/>
                    <input type="password"
                     value={password}
                     placeholder='Enter password'
                     onChange={(e)=> setPassword(e.target.value)}
                     required
                     className='outline-none w-[100%]'
                     />
                </div>


  


                <div className='flex gap-3 w-[100%] lg:w-[90%] border p-3 rounded-2xl'>
                    <img src="/genre.svg" alt="" width={30} />
                    <input type="text"
                     value={genre}
                     placeholder='Favorite Genre'
                     onChange={(e)=> setGenre(e.target.value)}
                     required
                     className='outline-none w-[100%]'
                     />
                </div>


                <div className='invisible'>
                    <img src="/share.jpg" alt=""  width={30}/>
                    <input type="text"
                     value={"Url "}
                     placeholder='Enter Image URL'
                     onChange={()=> setImgUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlI2tHK_QIdtAEfb9kr0L4MhxaL6dij2fc8g&usqp=CAU")}
                     
                     />
                </div>

                <div className='text-center flex gap-3 padAir:justify-center padAir:items-center'>
                    <input type="checkbox" value="I Agree to the terms and condition" required  />
                    <label htmlFor="I Agree to the terms and condition">I Agree to the terms and condition</label>
                </div>

                <div className='text-center w-[80%] mt-4'>
                    <button className='bg-gradient-to-r from-black via-purple-500 to-blue-500 w-[100%] p-3 rounded-2xl' type='submit'>
                        Register
                    </button>
                </div>


                <div className='text-right text-sm'>
                    <h4>Already Have an account?? <Link to='/login' className='text-purple-700'>Login</Link></h4>
                </div>




            </div>



        </form>

        <ToastContainer/>
    </div>
  )
}

export default Signup