import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Greeting from './Components/Greeting';
import About from './Components/About';
import Contact from './Components/Contact';
import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Greeting</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/about" element={<About course="React.js" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </>
  );
}

export default App;
