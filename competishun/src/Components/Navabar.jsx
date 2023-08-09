import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut=async()=>{
    try {
        await logOut()
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <h1>Firebase Google Auth & Context</h1>
      {user?.displayName ? (
        <button onClick={handleSignOut}>logout</button>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;
