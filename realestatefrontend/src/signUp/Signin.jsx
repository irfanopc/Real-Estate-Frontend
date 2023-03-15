import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import store from "../store";


function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const navigator = useNavigate();
  const [signinData, setSigninData] = useState({ email: "", password: "" });

  const onSignin = (e) => {
    e.preventDefault();
  
    axios.post('/api/v1/signin', {
      email: signinData.email,
      password: signinData.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
 
    
        console.log(response.data);
      
        store.dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: response.data.user,
            token: response.data.token,
          
          },
        });
      // window.localStorage.setItem('id',response.data.user._id);
      // window.localStorage.setItem('email',response.data.user.email);
      alert(`user signin successfully`);
      navigator('/home');
    })
    .catch((error) => {
      alert(error.response.data.message)
    });
  };
  
  return (
    <>
  
      <div className="login-main">
        <div className="login-box">
          <div className="login-logo">LOGO</div>
          <div className="login-para">
            Enter your credentials to access your account
          </div>
          <form className="login-form">
            <input
              className="login-input"
              type="email"
              placeholder="User ID"
              name="email"
              required
              onChange={(e) => {
                setSigninData({ ...signinData, email: e.target.value });
              }}
            />

            <input
              className="login-input"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              onChange={(e) => {
                setSigninData({ ...signinData, password: e.target.value });
              }}
            />
            <i
              onClick={togglePasswordVisiblity}
              className="far fa-eye"
              id="togglePassword"
            ></i>

            <button className="login-btn" onClick={onSignin} type="submit">
              Sign In
            </button>
          </form>
          <div id="login-a">

          <Link to={"/signup"}>Sign up</Link>
             
          
          </div>
        </div>
        <div className="addition">
          <p>Don't have an account?</p>
          <Link to={"/signup"}>Sign up</Link>
          {/* <a href="/signup">Sign up</a> */}

           <Link to={"/signup"}>Sign up</Link>
          </div>
        </div>
        <div className="addition">
           <p>Don't have an account?</p>
          <Link to={"/signup"}>Sign up</Link>

        </div>
        <div></div>
      </div>
      
    </>
  );
}

export default Signin;
