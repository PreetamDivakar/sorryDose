import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PinPage from './PinPage';
import SorryPage from './SorryPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pin" element={<PinPage />} />
        <Route path="/sorry" element={<SorryPage />} />
      </Routes>
    </Router>
  );
}

export default App; 