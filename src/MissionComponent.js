// MissionComponent.js

import React from 'react';
import './MissionComponent.css'; // Import CSS file
import Mdj from './Images/Mdj.jpg'; // Import the financial image

const MissionComponent = () => {
  return (
    <div className="mission-container">
      <div className="mission-left">
        <div className="mission-content">
          <p className="mission-paragraph">
            Investing My Money has one mission:
          </p>
          <h2 className="mission-heading">
            Making you understand how you can invest money successfully that gives you a confident edge while making any money related decisions
          </h2>
        </div>
      </div>
      <div className="mission-right">
        <div className="image-container">
          <img src={Mdj} alt="Financial Image" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
      </div>
      <div className="white-boxes">
        <div className="white-box">Review 1</div>
        <div className="white-box">Review 2</div>
        <div className="white-box">Review 3</div>
      </div>
    </div>
  );
};

export default MissionComponent;
