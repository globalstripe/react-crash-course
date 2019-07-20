import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>GlobalStripe</h1>
      <Link style={linkStyle} to="/">Home</Link> 
      | <Link style={linkStyle} to="/Videos">Videos</Link> | <Link style={linkStyle} to="/Carousel">Carousel</Link>
      | <Link style={linkStyle} to="/BitMovin">BitMovin</Link>
      | <Link style={linkStyle} to="/BitMovin">ShakaPlayer</Link>
      | <Link style={linkStyle} to="/Toast">Toasts</Link>
      | <Link style={linkStyle} to="/Axios">Axios</Link>
      | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;