import React, { useState } from 'react'
import '../css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function login() {
    const[email, setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
  
    const loginUser = ()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home")
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert("Wrong credentials or Account does not exists")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }


  return (
    <>
    <div  className="main">
    <div className="login"> 
<h1>Login</h1>
<input 
id="inp"
type='email' 
placeholder='enter your email'
value={email}
onChange={(event)=>setEmail(event.target.value)}/>

<input
id="inp"
 type='password'
  placeholder='enter your password'
  value={password}
  onChange={(event)=>setPassword(event.target.value)}
  />

<button
id="login_btn" onClick={loginUser}>
    Login</button>

<Link to="/register">Not a registered user? Signup</Link>

</div>
</div>
    </>
  )
}

export default login