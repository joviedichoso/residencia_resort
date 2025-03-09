import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Amenities from './pages/Amenities';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import BeachGetaway from './pages/BeachGetaway';
import ExtendedStay from './pages/ExtendedStay'; // Added import
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beach-getaway" element={<BeachGetaway />} />
        <Route path="/extended-stay" element={<ExtendedStay />} /> {/* Added route */}
      </Routes>
    </Router>
  </React.StrictMode>
);