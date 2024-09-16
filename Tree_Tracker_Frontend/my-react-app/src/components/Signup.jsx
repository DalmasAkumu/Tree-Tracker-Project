import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileField1, setProfileField1] = useState('');
  const [profileField2, setProfileField2] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/', {
        user: {
          username,
          email,
          password,
        },
        other_profile_field_1: profileField1,
        other_profile_field_2: profileField2,
      });
      setSuccess(true);
      setError('');
      console.log('User created successfully:', response.data);

      // Redirect to login page upon successful sign-up
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.response?.data || error.message);
      setError('Failed to sign up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="text"
        value={profileField1}
        onChange={(e) => setProfileField1(e.target.value)}
        placeholder="Profile Field 1"
      />
      <input
        type="text"
        value={profileField2}
        onChange={(e) => setProfileField2(e.target.value)}
        placeholder="Profile Field 2"
      />
      <button type="submit">Sign Up</button>
      {error && <p>{error}</p>}
      {success && <p>Signup successful!</p>}
    </form>
  );
}

export default Signup;
