import React, { useEffect, useState } from 'react'
import './Contactus.css'
import {db} from '../config/firebase'
import { getDocs, collection, addDoc} from 'firebase/firestore';



export const Contactus = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [title,setTitle]=useState("")
  const [text, setText]=useState("");
  



  const textCollectioneRef =collection(db, "Zenmart e-commerse");



 
    const submitHandler=async ()=>{
      try{
      await addDoc( textCollectioneRef,
        {
          Name:name,
          Email:email,
          Title:title,
          Text:text
        }
        );
      }catch(err){
        console.error(err);
      }
    }
  
  
  return (
    <div className='contactme'>
        <div className='contactme-container'>
            <div className='contact-pic'>
                <img src='assets/fruits1.jpg' alt='Contact-pic'/>
            </div>
            <div className='contact-form'>
              <h4>You want to contact <span>ZenMART</span>? Please fill the form below</h4>
              <form>
               <div> <input type='text' placeholder='Your Name...' required onChange={(e)=>setName(e.target.value)}/></div>
               <div> <input type='Email' placeholder='Your Email Adress...' required onChange={(e)=>setEmail(e.target.value)}/></div>
               <div> <input type='text' placeholder='What is it About?...' required onChange={(e)=>setTitle(e.target.value)}/></div>
               <div>
                <textarea type="text" required onChange={(e)=>setText(e.target.value)}/>
               </div>
               <button className='contact-btn' onClick={submitHandler}>Send Message</button>

              </form>
            </div>
        </div>
    </div>
  )
}
