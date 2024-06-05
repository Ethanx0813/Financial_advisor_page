// Header.js
import React from 'react';
import './Header.css';
import logo from './Images/logo.png'; // Importing the logo

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left">
          <img src={logo} alt="Logo" className="header-logo" />
          <span className="header-title">Investing My Money</span>
        </div>
        <div className="header-contact">
          <p>Contact: abcdefg@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
