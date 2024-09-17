import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TreeList from './components/TreeList';
import UserList from './components/UserList';
import AddTree from './components/AddTree';
import LandingPage from './components/LandingPage'; 
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import './Styles/customStyles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Updated to render LandingPage at the root path */}
        <Route path="/trees" element={<TreeList />} /> {/* Updated path to /trees for clarity */}
        <Route path="/users" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-tree" element={<AddTree />} />
      </Routes>
    </Router>
  );
}

export default App;
