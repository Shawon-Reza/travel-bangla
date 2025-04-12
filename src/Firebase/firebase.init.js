// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJPEj8I6nsl1VIkdqqPAALu-KLpfB0KfY",
  authDomain: "travel-bangla-4e034.firebaseapp.com",
  projectId: "travel-bangla-4e034",
  storageBucket: "travel-bangla-4e034.firebasestorage.app",
  messagingSenderId: "1034736065359",
  appId: "1:1034736065359:web:6bb91e2c4d04148aa2833a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);