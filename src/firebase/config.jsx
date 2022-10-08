// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnhad3wtqALRZaZ1qGG4MSGUu_7IegQdY",
  authDomain: "rj-38040-7bd07.firebaseapp.com",
  projectId: "rj-38040-7bd07",
  storageBucket: "rj-38040-7bd07.appspot.com",
  messagingSenderId: "386614139586",
  appId: "1:386614139586:web:f047b06bbe765f3dc5395b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)