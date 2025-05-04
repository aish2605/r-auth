import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/signup.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function signup() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()

  const registerUser =() =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("User registered sucessfully ,now you can login")
        navigate("/")
        const user = userCredential.user;
        // ...

    })
    .catch((error)=>{
        alert("Wrong credential or user already exist")
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
    });

  }



  return (
    <>
    <div className="main">
    <div className="signup">
    <h1>Signup</h1>
    <input 
    type="name"
    id="inp"
     placeholder='enter your name'
     value={name}
     onChange={(event)=>setName(event.target.value)}
     />
    <input  
type="email"
       id="inp"
     placeholder='enter your email'
     value={email}
     onChange={(event)=>setEmail(event.target.value)}/>
   < input
   type="password"
     id="inp"
     placeholder='enter your password'
     value={password}
     onChange={(event)=>setPassword(event.target.value)}
    />
    
    <button id="signup_btn" onClick={registerUser}>Signup</button>
    <Link to="/">Already registered ? login</Link>
</div>
</div>
    </>
  )
}

export default signup