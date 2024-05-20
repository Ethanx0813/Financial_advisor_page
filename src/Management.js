// Management.js

import React from 'react';
import './Management.css';
import img6 from './Images/img6.jpeg'; // Import the financial image

const Management = () => {
  return (
    <div className="management-container"> {/* Changed class name to 'management-container' */}
      <div className="management-left">
        <div className="management-content">
          <p className="management-paragraph">
            Investing My Money has one mission:
          </p>
          <h2 className="management-heading">
            Making you understand how you can invest money successfully that gives you a confident edge while making any money related decisions
          </h2>
        </div>
      </div>
      <div className="management-right">
        <div className="image-container">
          <img src={img6} alt="Financial Image" className="financial-image" /> {/* Added class name for styling */}
        </div>
      </div>
    </div>
  );
};

export default Management;
