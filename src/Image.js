// Image.js

import React from 'react';
import financial from './Images/financial.jpg';
import './Image.css'; // Import CSS file

const Image = () => {
  const scrollToServices = () => {
    const servicesButton = document.getElementById('services-button');
    if (servicesButton) {
      const buttonPosition = servicesButton.getBoundingClientRect().top;
      window.scrollTo({ top: buttonPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={financial} alt="Financial Image" style={{ maxWidth: '600px', maxHeight: '600px' }} />
      </div>
      <div className="content-container">
        <span style={{ marginTop: 0 }} className="text-cap">Create an Efficient Financial Plan</span>
        <h2>Getting started is easy...</h2>
        <ul>
          <li className="list-checked-item">1. Figure out a plan that works for you.
            Click on the book a free call button below to understand your relation with money and outline a financial plan that makes sense for you.
          </li>
          <li className="list-checked-item">2. Use the plan and take action.
            Follow the plan closely and realize the vision.
          </li>
          <li className="list-checked-item">3. Take control.
            Understand how money can work in your favor, and take control of your finances.
          </li>
        </ul>
        <button id="services-button" className="orange-button" onClick={scrollToServices}>
          Learn Your Secret Power
        </button>
      </div>
    </div>
  );
};

export default Image;
