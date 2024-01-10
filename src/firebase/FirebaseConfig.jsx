// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKG2_vMi6MMri6zci2niiya3SznKA9Lq4",
  authDomain: "cart-80dec.firebaseapp.com",
  projectId: "cart-80dec",
  storageBucket: "cart-80dec.appspot.com",
  messagingSenderId: "896200237958",
  appId: "1:896200237958:web:1f9fa979b0ccd9f1084207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;