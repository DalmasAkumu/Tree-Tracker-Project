import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Tree Tracker</h1>
        <p>Your journey to tracking tree planting and reforestation starts here.</p>
        <div className="button-group">
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature">
          <h3>Track Your Trees</h3>
          <p>Easily monitor and manage your tree planting activities.</p>
        </div>
        <div className="feature">
          <h3>Get Involved</h3>
          <p>Join a community of tree planters and contribute to reforestation efforts.</p>
        </div>
        <div className="feature">
          <h3>Data Insights</h3>
          <p>Access detailed insights and reports on your tree planting activities.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; 2024 Tree Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
