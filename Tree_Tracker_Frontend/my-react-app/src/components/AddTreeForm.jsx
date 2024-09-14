import React, { useState } from 'react';
import api from '../api'; // Import the Axios instance

function AddTreeForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTree = {
      name,
      location,
    };

    api.post('trees/', newTree)
      .then(response => {
        setMessage('Tree added successfully!');
        setName('');
        setLocation('');
      })
      .catch(error => {
        setMessage('Error adding tree.');
      });
  };

  return (
    <div>
      <h1>Add New Tree</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Tree</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddTreeForm;
