import React from 'react';

import { Routes, Route} from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Css from '../pages/Css';
import Home from '../pages/Home';
import Html from '../pages/Html';
import Logo from '../pages/Logo';
import Services from '../pages/Services';


function AppRouter() {
  return (
    <div>

        <Navbar/>
        <Routes>
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/css' element={<Css/>} />
            <Route path='/html' element={<Html/>} />
            <Route path='/logo' element={<Logo/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
    </div>
  
  
  )
}

export default AppRouter