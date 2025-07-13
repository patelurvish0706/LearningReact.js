import React from 'react'
import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import AddSite from './components/AddSite'
import Verify from './components/Verify'
import SiteDetails from './components/SiteDetails'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <div className="page">
        <div id="header">
          <p>🔐 Locify - A SafeCase for Password</p>
        </div>

        <Home />
        <Register />
        <Login />
        <AddSite />
        <Verify />
        <SiteDetails />


        <div id="footer">
          <p>&copy; Locify - Secure Password Manager. 2025 - Urvish Patel</p>
        </div>
      </div>
    </>
  )
}

export default App
