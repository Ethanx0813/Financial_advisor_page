// InfoBoxes.js
import React from 'react';
import './InfoBoxes.css';

const InfoBoxes = () => {
  return (
    <div className="info-boxes">
      <div className="info-box">
        <h3>24 Hours Service Available</h3>
      </div>
      <div className="info-box">
        <h3>92% Satisfaction Rate</h3>
      </div>
      <div className="info-box">
        {/* Add the third box title here */}
        <h3>Third Box Title</h3>
      </div>

      {/* Add the names separately below the boxes */}
      <div className="name-box">
        <p>Ajay Poddar</p>
      </div>
      <div className="name-box">
        <p>John Doe</p>
      </div>
      <div className="name-box">
        {/* Add the third name here */}
        <p>Third Person Name</p>
      </div>
    </div>
  );
};

export default InfoBoxes;
