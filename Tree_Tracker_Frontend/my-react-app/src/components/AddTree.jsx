
import React, { useState } from 'react';
import axios from 'axios';

function AddTree() {
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem('access_token');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/trees/', 
      { species, location },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('Tree added:', response.data);
        setSpecies('');
        setLocation('');
      })
      .catch(error => {
        setError('Error adding tree');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Species" 
        value={species} 
        onChange={e => setSpecies(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={e => setLocation(e.target.value)} 
      />
      <button type="submit">Add Tree</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default AddTree;
