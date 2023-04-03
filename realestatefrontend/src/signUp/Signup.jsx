import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



function Signup() {
   const [data,setData] = useState({email :"",password:"",cpassword:""})

   const [error, setError] = useState('');
   const navigator=useNavigate();
   const onSubmit = (e) => {
    e.preventDefault();
  
    if (data.password !== data.cpassword) {
      return toast.error(`password doesn't match`);
    }
  
    axios.post('/api/v1/signup', {
      email: data.email,
      password: data.password,
      confirmpassword: data.cpassword,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
     console.log(response);
        alert(`user signedup successfully`)
        navigator('/');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
  };

  const  handleValidationEmail = (e) => {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(e.target.value.match(mailformat))){
           setError('Enter a valid Email')
    }
  }
  const  handleValidationPassword = (e) => {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!(strongRegex.test(e.target.value))){
           setError('password must contain 8 characters lowercase uppercase digit and special characters ')
    }
  }
  

    return (

        <>
        <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">LOGO</div>
                <div className="login-para">Create New Account</div>

                {error && <div className='error'>{error}</div>}

                <form className='login-form'>
                    <input 
                    className='login-input'  
                    type="email" placeholder="Mail ID" 
                    name="email"  required  
                    onChange={(e)=>{setData({...data,email:e.target.value}); setError('')}} 
                    onBlur={handleValidationEmail}
                    />

                    <input 
                    className='login-input'  
                    type="password" 
                    placeholder="Password" 
                    name="password"  
                    required 
                    onChange={(e)=>{setData({...data,password:e.target.value}); setError('')}} 
                    onBlur={handleValidationPassword}
                    />

                    <input 
                    className='login-input'  
                    type="password" 
                    placeholder="Confirm Password" 
                    name="cpassword"  
                    required 
                    onChange={(e)=>{setData({...data,cpassword:e.target.value})}} 
                    />
                    
                    <button className='login-btn' type="submit" onClick={onSubmit} >Sign up</button>
                </form>
            </div>
            <div className='addition'>

            
            <Link to={"/"}>Sign in</Link>

    
            </div>
        </div>

        <ToastContainer/>
        </>

    )
}








export default Signup
