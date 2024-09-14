import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Your Django API base URL
  timeout: 10000, // Optional: Set a timeout for requests
});

export default api;
