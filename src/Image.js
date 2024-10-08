import React from 'react';
import imag4 from './Images/imag4.jpeg';
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
      <h1 className="white-color" style={{ marginLeft: '350px', marginTop: '80px' }}>Getting started is easy...</h1>

      <div className="image-and-content-container">
        <div className="image-container">
          <img src={imag4} alt="Financial planning illustration" style={{ maxWidth: '600px', maxHeight: '800px' }} />
        </div>
        <div className="content-container">
          <h2 className="sky-color">1. Figure out a plan that works for you</h2>
          <p className="white-color">
            Click on the "Book a free call" button below to understand your<br /> relationship with money and outline a financial plan that makes<br /> sense for you.
          </p>
          <h2 className="sky-color">2. Use the plan and take action</h2>
          <p className="white-color">
            Follow the plan closely and realize the vision.
          </p>
          <h2 className="sky-color">3. Take control</h2>
          <p className="white-color">
            Understand how money can work in your favor, and take control of your finances.
          </p>
          <div className="button-container">
            <button id="services-button" className="orange-button" onClick={scrollToServices}>
              Book a free call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
