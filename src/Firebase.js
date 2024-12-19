// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7E3dD-ZcxQeSauKQIjgUyjdz-2wAV03Q",
  authDomain: "authentication-80c17.firebaseapp.com",
  projectId: "authentication-80c17",
  storageBucket: "authentication-80c17.firebasestorage.app",
  messagingSenderId: "754177916600",
  appId: "1:754177916600:web:d70dd9165d35b8d75c7e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export default app