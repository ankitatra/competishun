import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user,setUser]=useState()
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };


  const logOut=()=>{
    signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
        console.log("user",currentuser)

    })
    return()=>{
        unsubscribe()
    }
  },[])
  return (
    <AuthContext.Provider value={{ googleSignin,logOut,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
