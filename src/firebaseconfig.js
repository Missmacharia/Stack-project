// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {  getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkBHiSUj6zRzq4BcPMNQdVMIpJHE__siI",
  authDomain: "stack-d1b2f.firebaseapp.com",
  projectId: "stack-d1b2f",
  storageBucket: "stack-d1b2f.appspot.com",
  messagingSenderId: "1081772161753",
  appId: "1:1081772161753:web:4c217d74c03199cdf01cc8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb= getFirestore(app)