import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards';
import Support from './components/contact/Contact';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
import Lib from './components/lib/Lib';
import LibDir from './components/lib/LibDir';
import Script from './components/lib/Script';
import About from './components/about/About';
import Login from './components/login/Login';
import WebIDE from './components/editor/Landing'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/webide" element={<WebIDE />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/lib" element={<Lib />}>
        <Route path="" element={<LibDir />} />
        <Route path=":postSlug" element={<Script />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
