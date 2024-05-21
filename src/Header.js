// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">IMM</h1>
        <div className="header-contact">
          <p>Contact: abcdefg@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
