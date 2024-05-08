import React from 'react';
import './StepsComponent.css'; // Import the CSS file

const StepsComponent = () => {
  return (
    <div className="steps"> 
    <div className="steps-container">
      <div className="step-item">
        <h3> Figure out a plan<br></br> that works for you</h3>
      </div>
      <div className="step-item">
        <h3> Use the plan <br></br>and take action</h3>
      </div>
      <div className="step-item">
        <h3> Take Control</h3>
      </div>
    </div>
    </div>
  );
};

export default StepsComponent;
