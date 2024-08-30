import React from 'react';
import './AboutComponent.css';
import financial_ from './Images/financial_.jpeg';

const AboutComponent = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>About Investing My Money</h1>
        <h2>I started Investing My Money to break the cycle of bad money decisions.</h2>
        <p>A large pool of people don't understand the process involved in choosing the right investment options.</p>
        <p>We take them on a journey to discover mindfulness while taking investment decisions.</p>
      </div>
      <div className="about-right">
        <div className="about-image-container">
          <img src={financial_} alt="Investment related" />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
