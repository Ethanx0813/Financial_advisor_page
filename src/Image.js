import React from 'react';
import financial from './Images/financial.jpg';
import './Image.css'; // Import CSS file

const Image = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={financial} alt="Financial Image" style={{ maxWidth: '600px', maxHeight: '600px' }} />
      </div>
      <div className="content-container">
      <span style={{ marginTop: 0 }} className="text-cap">Create an Efficiant Financial Plan</span>
        <h2>Less Confusion, more Compounding</h2>
        <p>Start with award-winning templates, then customize to fit your style and professional needs.</p>
        <ul>
        <li className="list-checked-item">Choose investment that make sense for you</li>
      <li className="list-checked-item">Set up your finances so that they not only grow exponentially , but are also safe</li>
      <li className="list-checked-item">Understand How much you need to invest so that you can balance between today's expenses and future savings</li>
      <li className="list-checked-item">Online E-commerce</li>
      <li className="list-checked-item">Make more informed fincanical decisions as we explore all options with you  </li>
        </ul>
      </div>
    </div>
  );
};

export default Image;
