import React, { useState, useEffect } from 'react';
import api from '../api'; // Import the Axios instance

function TreeList() {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('trees/')
      .then(response => {
        setTrees(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading trees...</p>;
  if (error) return <p>Error loading trees!</p>;

  return (
    <div>
      <h1>Tree List</h1>
      <ul>
        {trees.map(tree => (
          <li key={tree.id}>
            <strong>{tree.name}</strong> - {tree.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TreeList;
