import React from 'react'
import "./Login.css"
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = (e) => {
      e.preventDefault(); 
      setError(""); 
  
      if (!email || !password) {
        setError("Email and Password are required.");
        return;
      }
  
      console.log("Logging in with:", { email, password });
    };
  
  return (
    <>
        <div className='login'>
          <div className='header'>
            <div className='text'>
              Sign Up
            </div>
            <div className='ul'></div>
          </div>
          <div className='inputs'>
            <div className='input'>
              <FaRegUser className='icons-4' />
              <input type="text" name="" id="" placeholder='Name' />
              
            </div>
            <div className='input'>
              <HiOutlineMail className='icons-4' />
              <input type="email" name="" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='input'>
              <CiLock className='icons-4' />
              <input type="password" name="" id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="f-password">Forgot Password? <span>Click Here!</span></div>
          <div className="submit">
            <div className="sub">Sign Up</div>
            <div className="sub">Login</div>
          </div>
        </div>
    </>
  )
}

export default Login