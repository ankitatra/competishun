// import React, { useEffect } from "react";
// import GoogleButton from "react-google-button";
// import { UserAuth } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
// const Signin = () => {
//   const {googleSignin,user}=UserAuth()
//   const navigate=useNavigate()
//   const handleGoogleSignIn=async()=>{
//     try {
//       await googleSignin()
//       navigate("/movie")
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(()=>{
//       if(user!==null){
//         navigate("/movie")
//       }
//   },[user])
//   return (
//     <div>
//       <h1>Signin Page</h1>
//       <GoogleButton
//         onClick={handleGoogleSignIn}
//       />
//     </div>
//   );
// };


// export default Signin;


import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignin, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignin();
     
      navigate("/movie");
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/movie");
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Signin Page</h1>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Signin;

