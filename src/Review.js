// Review.js
import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="reviews-container">
      <div className="review">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="message">This is a beautiful template with exciting components.</div>
      </div>
      <div className="review">
        <div className="stars">⭐⭐⭐⭐½</div>
        <div className="message">The best template I've ever come across.</div>
      </div>
      <div className="review">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="message">There one theme is everything that user wants.</div>
      </div>
    </div>
  );
};

export default Review;
