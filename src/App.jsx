import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from '../src/pages/login'
import Signup from '../src/pages/signup'
import Home from '../src/pages/home'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App