// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQTlls1YWD1uLk9NtCERK0B3vFpIMvbQ",
  authDomain: "tartas-75dba.firebaseapp.com",
  projectId: "tartas-75dba",
  storageBucket: "tartas-75dba.appspot.com",
  messagingSenderId: "288425019922",
  appId: "1:288425019922:web:afffce8c9fa3c9dbe3a6cb",
  measurementId: "G-KC0HKPPDEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);