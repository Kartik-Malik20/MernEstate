// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a97d9.firebaseapp.com",
  projectId: "mern-estate-a97d9",
  storageBucket: "mern-estate-a97d9.appspot.com",
  messagingSenderId: "883300100823",
  appId: "1:883300100823:web:8c1c878399d2f238e55e92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);