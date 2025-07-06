import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function PinPage() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const correctPin = '3525'; 

  const handleSubmit = () => {
    if (pin === correctPin) {
      navigate('/sorry');
    } else {
      setError('Incorrect PIN. Try again.');
    }
  };

  return (
    <div className="container">
      <div className="content-box">
        <h2>Enter the 4-digit PIN 💬</h2>
        <div className="pin-container">
          <input
            type="password"
            maxLength="4"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button onClick={handleSubmit}>Unlock</button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default PinPage; 