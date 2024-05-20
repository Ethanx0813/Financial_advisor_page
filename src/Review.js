import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <div className="reviews-container">
      <div className="review">
        <div className="stars">⭐⭐⭐⭐⭐</div>
       <div className="message">I've been thrilled with my experience investing with IMM. The returns have consistently exceeded my expectations, and the support from them has been exceptional. With transparent communication and reliable results, I wholeheartedly recommend them to anyone looking to grow their wealth through smart investments.<br></br>        
Richa Agrawal, 37
Owner, Her Closet</div>
      </div>
      <div className="review">
        <div className="stars">⭐⭐⭐⭐½</div>
        <div className="message">Disha from IMM has been my financial advisor for over 5 years and her services have been nothing less than phenomenal. Apart from informing me about new investment opportunities, she has been able to keep my portfolio steady consistently. What makes her the best is her absolute honesty and transparency. With her, I know my investments are in secure hands.<br></br>
Rahul Mantri, 29
Senior Associate, Cyril Amarchand Mangaldas.</div>
      </div>
      <div className="review">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="message"> To secure your income and plan your future expenses better, Investing My Money can help you. I trust them and put aside a portion of my money for investments.<br></br>
Vijay Poddar, 23 
Associate Software Developer, IQGateway.</div>
      </div>
    </div>
  );
};

export default Review;
