import { useState } from 'react'
import './App.css'
import Login from './users/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './output.css'
import './custome.css'
import Signup from './users/Signup'
import Account from './users/Account'
import Home from './Home/Home'
import NavBar from './NavBar'
import Place from './Places/Place'
function App() {


  return (
    <>
    
      
      <BrowserRouter>
      <NavBar />
        <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Account/>}></Route>
          <Route path="/Place" element={<Place/>}></Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
