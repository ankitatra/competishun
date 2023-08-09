import React, { Children } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Ptotected = ({children}) => {
    const {user}=UserAuth()
   
    const navigate=useNavigate()
    
    console.log("user protected",user)
    if(!user){
       alert("please login first")
        return <Navigate to="/signin"/>
        // return  navigate("/signin")
    }
  return children
}

export default Ptotected