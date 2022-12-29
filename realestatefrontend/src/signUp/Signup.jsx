import React from 'react'
import "./Signup.css"
function Signup() {
    return (

        <>
        <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">LOGO</div>
                <div className="login-para">Create New Account</div>
                <form className='login-form'>
                    <input className='login-input' type="email" placeholder="Mail ID" name="email" required/>
                    <input className='login-input'  type="password" placeholder="Password" name="password" required/>
                    <input className='login-input'  type="password" placeholder="Confirm Password" name="cpassword" required/>
                    <button className='login-btn' type="submit" >Sign up</button>
                </form>
            </div>
            <div className='addition'>
            <a href='/'>Sign in</a>
            </div>
        </div>
        </>

    )
}








export default Signup