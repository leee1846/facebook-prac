import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";

const Login = () => {
  const signIn = async (e) => {
    try {
      const response = await auth.signInWithPopup(provider);
      console.log(response);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png'
          alt=''
        />
        <p>facebook</p>
        <Button type='submit' onClick={signIn} className='button'>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
