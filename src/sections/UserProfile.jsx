import React, { useEffect, useState } from 'react'
import {auth, db} from "../components/Firebase"
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    const [userDetails, setUserDetails]= useState('');
    const fetchUserData = async(user)=> {
        auth.onAuthStateChanged(async(user)=> {
        console.log(user)
        const docRef= doc(db, "Users", user.uid);
        const docSnap= await getDoc(docRef);

        if(docSnap.exists()){
            setUserDetails(docSnap.data());
            console.log(docSnap.data())
        }
        else{
            console.log("user is not logged in")
        } 
        })

    }
    useEffect(()=> {
        fetchUserData()
    }, [])

    const handleLogout= async()=> {
        try{
            await auth.signOut();
            console.log('User signout successfully');
            window.location.href='/';
            toast.success(`${userDetails.userName} logged out successfully`, {
                position:"top-center"
            })
        }
        catch (error){
            console.log('Error logging out', error.message)
        }
    }
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile