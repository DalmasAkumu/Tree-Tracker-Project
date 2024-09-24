import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import Layout from './Layout'; // Import the Layout component

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        username, 
        email,    
        password, 
      });
      setSuccess(true);
      setError('');
      console.log('User created successfully:', response.data);
      navigate('/login');
    } catch (error) {
      // Log the entire error response for debugging
      console.error('Error signing up:', error.response);
      // Set error message based on the response data
      setError(
        error.response?.data?.detail || 
        error.response?.data?.non_field_errors?.[0] || 
        'Failed to sign up'
      );
    }
  };

  return (
    //<Layout>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '400px',
          width: '100%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#004d00',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#003300')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#004d00')}
        >
          Sign Up
        </button>
        {error && (
          <p style={{ color: 'red', margin: '10px 0', textAlign: 'center' }}>{error}</p>
        )}
        {success && (
          <p style={{ color: 'green', margin: '10px 0', textAlign: 'center' }}>
            Signup successful!
          </p>
        )}
      </form>
    //</Layout>
  );
}

export default Signup;
