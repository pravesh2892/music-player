import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token');

   
    navigate('/signin'); 
  };

  return (
    <div className="logout-overlay">
      <div className="logout-container">
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default LogOut;