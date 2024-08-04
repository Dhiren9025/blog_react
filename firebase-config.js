// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpc-kZV0eP8mSyO7Kh3ytlENKr-zMZ1Mg",
  authDomain: "blog-ad84a.firebaseapp.com",
  projectId: "blog-ad84a",
  storageBucket: "blog-ad84a.appspot.com",
  messagingSenderId: "1011057909946",
  appId: "1:1011057909946:web:df126a460874e86a43e283",
  measurementId: "G-HNZRKMWG07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


//const analytics = getAnalytics(app);