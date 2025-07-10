import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import How from './Pages/How';
import Navbar from './components/navbar';
import LogoTitle from './components/LogoTitle';
import Registration from './Pages/Registration';

const App = () => {
  return (
 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing-plans" element={<Pricing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/how-we-works" element={<How />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>  

  );
};

export default App;


