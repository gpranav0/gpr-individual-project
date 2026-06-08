import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/settings/account');
  };

  return (
    <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h2 className="page-title">Login Required</h2>
        <p className="page-description">You must be logged in to view Account settings.</p>
        <button onClick={handleLogin} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          Simulate Login
        </button>
      </div>
    </div>
  );
};

export default Login;
