import React, { useEffect, useState } from 'react'
import {auth, db} from "../components/Firebase"
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Player from './Player'
import Playlist from './Playlist'
import SubscriptionPrompt from './SubscriptionPrompt'
import ErrorBoundary from '../components/ErrorBoundary'

const tracks = [
  {
    title: 'Higher',
    artist: 'Burna Boy',
    cover: '/higher.jpg',
    audioSrc: 'Higher.mp3',
  },
  {
    title: 'Benin Boys',
    artist: 'Rema , Shallipopi',
    cover: '/benin.jpg',
    audioSrc: 'Beninboys.mp3',
  },
  {
    title: 'Uptown Disco',
    artist: 'Olamide, Fireboy DML, Asake',
    cover: '/disco.jpg',
    audioSrc: 'discoo.mp3',
  },

{
    title: 'Wave',
    artist: 'Asake, Central Cee',
    cover: '/asharks.jpg',
    audioSrc: 'axcee.mp3',
  },
    {
    title: 'Free Fall',
    artist: 'Tems, J.Cole',
    cover: '/freefall.jpg',
    audioSrc: 'free.mp3',
  },
    {
    title: 'Cana',
    artist: 'Seyi Vibes',
    cover: '/naham.jpg',
    audioSrc: 'cana.mp3',
  },
      {
    title: 'Bad Vibes',
    artist: 'Ayra Starr, Seyi Vibes',
    cover: '/aybum.jpg',
    audioSrc: 'badvibes.mp3',
  },
      {
    title: 'Soweto Remix ft Don Toliver',
    artist: 'Victony, Tempoe, Rema',
    cover: '/soweto.jpg',
    audioSrc: 'soweto.mp3',
  },
      {
    title: 'Unavailable',
    artist: 'Davido, Musa keys',
    cover: '/timeless.jpg',
    audioSrc: 'unavailable.mp3',
  },
      {
    title: 'Mood',
    artist: 'Wizkid , Bnxn',
    cover: '/wizd.jpeg',
    audioSrc: 'mood.mp3',
  },
      {
    title: 'Lonely At the Top',
    artist: 'Asake ',
    cover: '/Woa.jpeg',
    audioSrc: 'lonelytop.mp3',
  },

        {
    title: 'Tiny Apartment',
    artist: 'Victony, Saint Jhn ',
    cover: '/stubborn.jpg',
    audioSrc: 'tiny.mp3',
  },

      {
    title: 'Last Heartbreak Song',
    artist: 'Ayra starr, Giveon ',
    cover: '/aybum.jpg',
    audioSrc: 'heartbreak.mp3',
  },



  // Add more tracks as needed
];

const Stream = () => {
        const [userDetails, setUserDetails]= useState('');

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [showSubscriptionPrompt, setShowSubscriptionPrompt] = useState(false);

  const handleSelectTrack = (trackIndex) => {
    setCurrentTrackIndex(trackIndex);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

    const toggleSubscriptionPrompt = () => {
    setShowSubscriptionPrompt(!showSubscriptionPrompt);
  };

    //get user data

    const fetchUserData= async()=> {
        auth.onAuthStateChanged(async(user)=> {
            console.log(user)
            const docRef= doc(db, "Users", user.uid);
            const docSnap= await getDoc(docRef);

            if(docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data())
            }
            else{
                console.log("user is not login")
            }
        })
    }
    useEffect(() => {
      fetchUserData()
     }, [])

      const handleLogout= async()=> {
        try {
            await auth.signOut();
            console.log("User Logged Out successfully!")
            window.location.href="/login";
            toast.success(`${userDetails.firstName} logged out successfully`, {
                position: "top-center"
            })

        } catch (error) {
            console.log("Error logging out:", error.message)
        }
     }
  return (
    <>
 
     <div className=' bg-zinc-800 min-h-screen'>
        {userDetails? (
          
            <div className='bg-zinc-800 min-h-screen text-white'>
               <section className='bg-zinc-800'>
        <nav className='py-5 px-4 bg-zinc-900'>
            <img src="/logo.jpeg" alt=""  />
        </nav>
    </section>
                <div>
      
                    <section className='flex justify-between px-10 py-5'>
                       <div className='flex gap-2 font-bold text-lg items-center font-poppins'>
                         <img src={userDetails.imgURL} alt="" width={30} className='rounded-xl' />
                         <h2>
                            {userDetails.userName}

                            
                         </h2>
    
                       </div>
                       <div>
                        <button className=' font-bold text-lg p-4 rounded-3xl bg-zinc-200  text-zinc-600 font-poppins
                        ' onClick={handleLogout}>
                            Logout
                        </button>
                       </div>
                    </section>
   
                </div>

                <div>
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center w-[100%] py-20">
                                   <section className='text-sm font-semibold font-poppins bg-white text-black w-max p-2 rounded-3xl mt-4 ml-7'>
                        <h1>
                            Basic plan
                        </h1>
                    </section>
      
      <div className='flex  padAir:flex-row gap-20 rounded-2xl border flex-col mt-4 w-[80%] items-center'> 
        <div className='w-[100%] font-montserrat h-[]'>
            <Player  track={tracks[currentTrackIndex]}
        onNext={handleNextTrack}
        onPrev={handlePrevTrack} />
        </div>
        <div className='w-[100%] font-poppins'>
             <Playlist tracks={tracks} onSelectTrack={handleSelectTrack} />
        </div>
        </div>
    
    </div>
                </div>

                <div className='text-2xl text-center mt-12 font-merriweather pb-12'>
                      <button
        onClick={toggleSubscriptionPrompt}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
      >
        Want More of this? Subscribe to Premium Plan
      </button>
     
                </div>

            </div>
        )
        :
         (
            <>
             <section className='bg-zinc-800'>
          <Navbar/>
    </section>
            <div className='flex flex-col items-center justify-center text-white padAir:text-3xl font-bold w-[100%] px-4 mx-auto py-52 font-montserrat text-lg bg-zinc-700 mt-10'>
                Pls Login to Access the content in this page
                <p>
                    <Link to='/login' className='text-purple-400 font-lg font-open-sans'>Login</Link>
                </p>
            </div>
            </>



           
            
             
        )
        }
    </div>
    </>
   
  )
}

export default Stream