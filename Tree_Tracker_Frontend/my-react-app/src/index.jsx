import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'; // Import global styles here
import './styles/tailwind.css'; // Import Tailwind CSS
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);