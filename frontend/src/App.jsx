import React from 'react';
import { Routes, Route } from 'react-router-dom'; // React Router for routing
import Navbar from './components/Navbar';
import Home from './components/Home';
import Course from './components/Course';
import About from './components/About';
import C from './components/C';
import Python from './components/Python';
import JavaScript from './components/Javascript';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      {/* Setup React Router */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/c' element={<C />} />
        <Route path='/python' element={<Python />} />
        <Route path='/javascript' element={<JavaScript/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
