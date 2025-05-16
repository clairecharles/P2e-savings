import React, { useState } from 'react';
import Dashboard from './Dashboard'; 
import './App.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <div className='app'>
      {showWelcome ? (
        <div className='app2'>
          <h1>Welcome to the Stray kids Savings</h1>
          <p>Track and manage strays savings.</p>
          <button onClick={handleStart}>
            Get Started
          </button>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
