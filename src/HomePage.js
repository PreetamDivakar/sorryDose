import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content-box">
        <h1>Hey... ❤️</h1>
        <p>I have something to say...</p>
        <button onClick={() => navigate('/pin')}>Continue</button>
      </div>
    </div>
  );
}

export default HomePage; 