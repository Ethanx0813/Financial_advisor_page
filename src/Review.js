import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="reviews-container">
      <div className="review">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      <div className="review">
        <div className="stars">⭐⭐⭐⭐½</div>
        <div className="message">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </div>
      <div className="review">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="message">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
      </div>
    </div>
  );
};

export default Review;
