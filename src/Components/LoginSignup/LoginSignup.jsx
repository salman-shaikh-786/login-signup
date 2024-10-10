import React, { useState } from 'react'
import './loginsignup.css'
import person_image from '../Assets/person.png'
import email_image from '../Assets/email.png'
import password_image from '../Assets/password.png'





const LoginSignup = () => {
  const [action,setaction]=useState('Sign Up');
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className='underline'></div>
      </div>
   <div className="inputs">
    {action==="Login"?<div></div>:
    <div className="input">
    <img src={person_image} alt="" />
    <input type="text" placeholder='Name' />
  </div>}
    
    <div className="input">
      <img src={email_image} alt="" />
      <input type="email"  placeholder='Email' />
    </div>
    <div className="input">
      <img src={password_image} alt="" />
      <input type="password" placeholder='Password'/>
    </div>
   </div>
   {action==="Sign Up"?<div></div>
   :<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
   
   <div className="submit-container">
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setaction('Sign Up')}>Sign Up</div>
    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setaction('Login')}>Login</div>
   </div>
    </div>
  )
}

export default LoginSignup
