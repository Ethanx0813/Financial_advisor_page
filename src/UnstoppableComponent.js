import React from 'react';
import './UnstoppableComponent.css'; // Import CSS file
import imag1 from './Images/imag1.jpeg'; // Import financial image
import imag2 from './Images/imag2.jpeg';
import imag3 from './Images/imag3.jpg';

const UnstoppableComponent = () => {
  return (
    <div className="container">
      <h1 className="heading">Take Control of Your Money</h1>
      <div className="images-container">
        <figure className="snip1113 red">
          <img src={imag2} alt="Financial Image" />
          <figcaption>
            <h4>Understand your <span>Money self</span></h4>
          </figcaption>
        </figure>
        <figure className="snip1113 blue">
          <img src={imag1} alt="Financial Image" />
          <figcaption>
            <h4>Get financial clarity <span></span></h4>
          </figcaption>
        </figure>
        <figure className="snip1113">
          <img src={imag3} alt="Financial Image" />
          <figcaption>
            <h3>Live the life you want<span></span></h3>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default UnstoppableComponent;
