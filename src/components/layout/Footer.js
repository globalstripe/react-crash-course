import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Footer style={footerStyle}>
      <h1>The End</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      | <Link style={linkStyle} to="/Videos">Videos</Link> | <Link style={linkStyle} to="/Carousel">Carousel</Link>
      | <Link style={linkStyle} to="/BitMovin">BitMovin</Link>
    </Footer>
  )
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Footer;