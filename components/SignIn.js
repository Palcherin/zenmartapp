import React, {useState} from 'react'
import './Components.css'
import { auth } from '../config/firebase'

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { FaHouseUser, FaLock, FaMailBulk, FaPhone, FaUser, FaVoicemail } from 'react-icons/fa'

export const SignIn = () => {

const signin= async()=>{ 
    await signInWithEmailAndPassword(auth,email,password);

}
const signup=async()=>{
    await createUserWithEmailAndPassword(auth,email,password);
}


    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [visibility,setVisibility]=useState(false);
    const [signinVisibility,setSigninVisibility]=useState(false);

    const hideHandler=()=>{
        setVisibility(true);
        setSigninVisibility(false);
    }
    const unHideHandler=()=>{
        setSigninVisibility(true);
        setVisibility(false);
    }
  return (
    <div className='signin-container'>
         <h2>ZenMART <span>Account</span></h2>
        <form  style={{
        display:visibility
        ? "block"
        : "none"
    }}>
            <h1>Log into your account</h1>
           
            <div className='email-section'>
            <FaMailBulk/>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
            </div>
            <div className='password-section'>
                <FaLock className='password-icon'/>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
           
            </div>
            <button onClick={signin} className='form-button'>Login To Account</button>
        </form>
        <form  style={{
        display:signinVisibility
        ? "block"
        : "none"
    }}>
        <div>
            <h1>Register your account</h1>
           
            <div className='email-section'>
            <FaMailBulk/>
            <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
            </div>
            <div className='password-section'>
            <FaLock className='password-icon'/>
               <input type='password' placeholder='Confirm Password'  onChange={(e)=>setPassword(e.target.value)}/><br></br>
               
            </div>
            <div className='password-section'>
            <FaLock className='password-icon'/>
            
             <input type='password' placeholder='Confirm Password'  onChange={(e)=>setPassword(e.target.value)}/><br></br>
            
             
            </div>
            <button  className='form-button' onClick={signup()}>Submit Info</button>
            </div> 
        </form>
        <div className='sin-bttn'>
        <button type='form-button' onClick={()=>hideHandler()}>Sign In</button>
        <button type='form-button' onClick={()=>unHideHandler()}>Sign Up</button>
        </div>
    </div>
  )
}
