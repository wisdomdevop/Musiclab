// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage, ref} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeAuBdkr1Pxky0czPP1jKATWW-0jYGWvE",
  authDomain: "musiclab-8bb5b.firebaseapp.com",
  projectId: "musiclab-8bb5b",
  storageBucket: "musiclab-8bb5b.appspot.com",
  messagingSenderId: "797294291637",
  appId: "1:797294291637:web:6c86bfbe31bcf71341acfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db= getFirestore(app);
export const storage= getStorage(app);
export default app