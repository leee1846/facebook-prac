import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
  const signIn = (e) => {
    console.log(e.target);
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
