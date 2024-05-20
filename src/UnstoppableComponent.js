import React from 'react';
import './UnstoppableComponent.css'; // Import CSS file
import img1 from './Images/img1.jpg'; // Import financial image
import img2 from './Images/img2.jpeg';
import img4 from './Images/img4.jpg';
const UnstoppableComponent = () => {
  return (
    <div className="container">
      <h1 className="heading">Become Unstoppable</h1>
      <div className="images-container">
        <figure className="snip1113 red">
          <img src={img1} alt="Financial Image" />
          <figcaption>
            <h4>Understand your <span>Money self</span></h4>
            
          </figcaption>
        </figure>
        <figure className="snip1113 blue hover">
          <img src={img1} alt="Financial Image" />
          <figcaption>
            <h4>Get financial clarity <span></span></h4>
          
          </figcaption>
        </figure>
        <figure className="snip1113">
          <img src={img1} alt="Financial Image" />
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
