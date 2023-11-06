// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9OJDMlWmWGt3ZXQAn1QzR-_AScP6TlI",
  authDomain: "react-ecom-3cc55.firebaseapp.com",
  projectId: "react-ecom-3cc55",
  storageBucket: "react-ecom-3cc55.appspot.com",
  messagingSenderId: "448884936425",
  appId: "1:448884936425:web:272aa3537ffb598e086a78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth} 