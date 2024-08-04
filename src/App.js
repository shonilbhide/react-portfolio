
import './App.scss';
import { useRef } from 'react';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';

function App() {
  const location = useLocation();
  const url = window.location.href;
  console.log("LOCATION###",{location})
  // const { hash, pathname, search } = location;
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = '/about' element={<About />} />
          {/* <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    You are currently accessing <b>{url}</b><br />
    </>
  )
}

export default App
