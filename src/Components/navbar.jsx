import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Navbar.css';
const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={menuOpen ? ' navbar open' : 'navbar'} >

        {/* Logo */}
        <div className="nav-logo">
        <img class="brand" src="/logo.png"/>
        </div>
        
        {/* Navbar Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="services">Services</Link>
          <Link to="contact">Contact</Link>
        </div>

        {/* Hamburger Menu Toggle */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* Outlet for Routing */}
      <Outlet />

      {/* Footer */}
      <footer className="footer">
        <div>© 2024 Laxmi Honey. All rights reserved.</div>
        <div>Follow us on <a href="https://twitter.com/laxmihoneyindustry">Twitter</a></div>
      </footer>
    </>
  );
};

export default Layout;