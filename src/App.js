import './App.css';
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Navbar from './components/Navbar';
import MelodySkillTest from './components/MelodySkillTest';
import Images from './page/Images';
import Footer from './components/Footer';
import ButtonTop from './components/ButtonTop';


function App() {
  return (

    <Router>

     <MelodySkillTest/>
      <ButtonTop/>
      <Navbar />

  
      <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
    
      </Routes>

     <Footer/>
  
    </Router>
  
  );
}

export default App;
