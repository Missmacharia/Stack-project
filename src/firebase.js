// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdwSG36RCgRwdEmoqg18yQkp9AQ4vSTrE",
  authDomain: "stack-33775.firebaseapp.com",
  projectId: "stack-33775",
  storageBucket: "stack-33775.appspot.com",
  messagingSenderId: "211390945474",
  appId: "1:211390945474:web:b5fbd7ee25080fe013c35b",
  measurementId: "G-SSXFBY0EJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb= getFirestore(app)