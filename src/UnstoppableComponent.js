import React from 'react';
import './UnstoppableComponent.css'; // Import CSS file
import financial from './Images/financial.jpg'; // Import financial image

const UnstoppableComponent = () => {
  return (
    <div className="container">
      <h1 className="heading">Become Unstoppable</h1>
      <div className="images-container">
        <figure className="snip1113 red">
          <img src={financial} alt="Financial Image" />
          <figcaption>
            <h4>Understand your <span>Money self</span></h4>
            
          </figcaption>
        </figure>
        <figure className="snip1113 blue hover">
          <img src={financial} alt="Financial Image" />
          <figcaption>
            <h4>Get financial clarity <span></span></h4>
          
          </figcaption>
        </figure>
        <figure className="snip1113">
          <img src={financial} alt="Financial Image" />
          <figcaption>
            <h3>Live the life you want<span></span></h3>
            <h4></h4>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default UnstoppableComponent;
