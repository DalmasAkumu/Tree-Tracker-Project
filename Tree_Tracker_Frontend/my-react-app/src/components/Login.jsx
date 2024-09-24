import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import Layout from './Layout'; // Import the Layout component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        email,
        password,
      });
      // Save the token in local storage or context
      localStorage.setItem('token', response.data.access);
      navigate('/dashboard'); // Redirect to a protected page
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      setError('Failed to log in');
    }
  };

  // Inline styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    width: '100%',
    margin: '20px auto', // Center the form horizontally
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#006400', // Dark green color for consistency
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    //<Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={inputStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
          {error && <p style={errorStyle}>{error}</p>}
        </form>
      </div>
    //</Layout>
  );
}

export default Login;
