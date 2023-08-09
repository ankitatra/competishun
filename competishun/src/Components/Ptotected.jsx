import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
const Ptotected = ({children}) => {
    const {user}=UserAuth()
    console.log("user protected",user)
    if(!user){
       alert("please login first")
        return <Navigate to="/movie"/>
    }
  return children
}

export default Ptotected