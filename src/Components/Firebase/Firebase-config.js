// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOd-nHf65FX9zawYTC6auOxq25gwzEQls",
  authDomain: "equart-1b988.firebaseapp.com",
  projectId: "equart-1b988",
  storageBucket: "equart-1b988.appspot.com",
  messagingSenderId: "498796412654",
  appId: "1:498796412654:web:7d34edc1770f1f2c763dff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 
 
 
