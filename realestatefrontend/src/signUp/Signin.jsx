import React, { useState } from 'react'
import "./Signup.css"
function Signin() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <>
            <div className="login-main" >
                <div className="login-box">
                    <div className="login-logo">LOGO</div>
                    <div className="login-para">Enter your credentials to access your account</div>
                    <form className='login-form'>
                        <input className='login-input' type="email" placeholder="User ID" name="email" required />

                        <input className='login-input' type={passwordShown ? "text" : "password"} placeholder="Password" name="password" required />
                        <i onClick={togglePasswordVisiblity} class="far fa-eye" id="togglePassword"></i>

                        <button className='login-btn' type="submit">Sign In</button>
                    </form>
                    <div id='login-a'><a id="anchor" href="/Signup">Sign Up</a></div>
                </div>
                <div className='addition'>
                    <pre>Don't have an account?</pre>
                    <a href='/Signup'>Sign up</a>
                </div>
                <div>
  
        </div>
            </div>
        </>
    )
}

export default Signin