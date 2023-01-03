import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [id, setId] = useState('')

  const onSignin = async (e) => {
    e.preventDefault();
    try {


      await axios
      .post(
        "/api/v1/signin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {    
        console.log(data.message);
        if (data.message) {
          return alert(data.response.data.message);
        }

        alert(`user signin successfully`);
        navigator("/home");
        const paramId = (data.data.user._id) 
        window.localStorage.setItem("id", paramId);      
        window.localStorage.setItem("email", data.data.user.email);

      })
      .catch((error)=> {
        console.log(error);
      })
      
    } catch (error) {
      console.log(error);
    }
      
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="login-input"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <a id="anchor" href="/Signup">
              Sign Up
            </a>
          </div>
        </div>
        <div className="addition">
          <pre>Don't have an account?</pre>
          <a href="/Signup">Sign up</a>
        </div>
      </div>
    </>
  );
}

export default Signin;
