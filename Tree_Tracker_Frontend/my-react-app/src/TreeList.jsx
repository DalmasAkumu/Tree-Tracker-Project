import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TreeList() {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/trees/')
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
            <strong>{tree.species}</strong> - {tree.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TreeList;
