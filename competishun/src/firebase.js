// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYo2lwgzWExcfBZVoZWaec-p88OTm5Qkk",
  authDomain: "fir-auth-e7528.firebaseapp.com",
  projectId: "fir-auth-e7528",
  storageBucket: "fir-auth-e7528.appspot.com",
  messagingSenderId: "1078007103865",
  appId: "1:1078007103865:web:aa7ed04d372aadda4e6fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);