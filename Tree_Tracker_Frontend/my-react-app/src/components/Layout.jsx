import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Times New Roman, serif' }}>
      {/* Header */}
      <header style={{
          backgroundColor: '#004d00',
          color: '#fff',
          padding: '20px 0',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          position: 'fixed',
          top: '0',
          width: '100%',
          left: '0',
          zIndex: '1000',
      }}>
        CanopyConnect
      </header>

      {/* Navbar */}
      <nav style={{
          backgroundColor: '#003300',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 0',
          position: 'fixed',
          top: '60px',
          width: '100%',
          left: '0',
          zIndex: '999',
      }}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/signup" style={navLinkStyle}>Signup</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
        <Link to="/products" style={navLinkStyle}>Products</Link>
      </nav>

      {/* Main Content Area */}
      <main style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          marginTop: '100px', // Adjust this if necessary
          marginBottom: '0', // Remove any bottom margin to cover full height
          width: '100%', // Ensure full width
      }}>
        {children} {/* Render child components here */}
      </main>

      {/* Footer */}
      <footer style={{
          backgroundColor: '#006400',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          borderTop: '5px solid #004d00',
          position: 'relative',
          bottom: '0',
          width: '100%',
      }}>
        <div>
          <Link
            to="/signup"
            style={{
              backgroundColor: 'white',
              color: '#006400',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'background-color 0.3s, color 0.3s',
              fontFamily: 'Times New Roman, serif',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#004d00';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#006400';
            }}
          >
            Get Started
          </Link>
        </div>
        <div style={{ marginTop: '10px' }}>
          © 2024 CanopyConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Style for navigation links
const navLinkStyle = {
  color: '#fff',
  padding: '10px 15px',
  textDecoration: 'none',
  transition: 'background-color 0.3s, color 0.3s',
  fontSize: '1.1rem',
};

export default Layout;
