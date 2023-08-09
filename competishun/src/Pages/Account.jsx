import React, { useEffect } from 'react';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Account = () => {
    const { user, logOut } = UserAuth();
    const navigate=useNavigate()
    const handleSignOut=async()=>{
        console.log(user)
        try {
          navigate("/")
            await logOut()
          
        } catch (error) {
            console.log(error)
        }
      }
 
  return (
    <div >
      <h1 >Account</h1>
      <div>
        <p>Welcome {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} >
        Logout
      </button>
    </div>
  );
};

export default Account;