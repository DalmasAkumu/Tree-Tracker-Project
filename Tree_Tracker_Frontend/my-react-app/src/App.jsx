import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Adjusted import to the correct path
import TreeList from './components/TreeList';
import UserList from './components/UserList';
import AddTree from './components/AddTree';
import LandingPage from './components/LandingPage'; 
import Login from './components/Login';
import Signup from './components/Signup';
import './Styles/customStyles.css';

function App() {
  return (
    <Router>
      <Layout> {/* Wrap all routes in the Layout component */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Render LandingPage at the root path */}
          <Route path="/trees" element={<TreeList />} /> {/* Path to /trees for clarity */}
          <Route path="/users" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-tree" element={<AddTree />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
