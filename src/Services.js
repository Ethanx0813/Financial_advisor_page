// Services.js
import React, { useState, useEffect } from 'react';
import './Services.css'; 
import GreenLeafIcon from './GreenLeafIcon';

const Services = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const roles = ['Salaried,', 'A Businessperson,', 'Or a Freelancer'];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % mainMessage.length);
    }, 100);

    return () => {
      clearInterval(roleInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const renderCurrentRole = () => {
    const currentRole = roles[currentRoleIndex];
    const words = currentRole.split(' ');

    return words.map((word, index) => (
      <span key={index} className={`animated-word ${index === 0 ? 'highlight' : ''}`}>
        {word}
        {index < words.length - 1 && ' '}
      </span>
    ));
  };

  const mainMessage =
    '90% of people who called agree that having someone to talk to about their financial plans has enhanced their financial journey.';

  const renderCurrentMessage = () => {
    return mainMessage.slice(0, currentMessageIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle form submission logic (Firebase or any other method)

    // Clear the form
    setCurrentRoleIndex(0);
    setCurrentMessageIndex(0);
  };

  const handleChange = (e) => {
    // Add your form field change logic here
    // ...
  };

  return (
    <div className="services-container">
      <div className="left-section">
        <h1 style={{ color: 'white', marginTop: 0, fontSize: '45px' }}>
          Providing investment solutions whether you are
        </h1>
        <h2 className="animated-text">{renderCurrentRole()}</h2>
        <div className="message-boxes">
        
          <div className="message-box">
            <h4><GreenLeafIcon />24 Hours</h4>
            <p style={{ marginLeft: '60px' }}>Response time</p>

          </div>
          <div className="message-box">
            <h4><GreenLeafIcon />92%</h4>
            <p style={{ marginLeft: '60px' }}>Response time</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="book-free-call-container">
          <div className="book-free-call-form">
            <h1>Book a Free call</h1>
            <h3>{renderCurrentMessage()}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" onChange={handleChange} required />
              </div>

              <div className="form-field">
                <label htmlFor="annualIncome">Annual Income:</label>
                <select id="annualIncome" name="annualIncome" onChange={handleChange} required>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="100000-500000">100,000 - 500,000</option>
                  <option value="500000-1000000">500,000 - 1,000,000</option>
                  <option value="1000000-1500000">1,000,000 - 1,500,000</option>
                  <option value="1500000-2000000">1,500,000 - 2,000,000</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" onChange={handleChange} required />
              </div>

              <button type="submit">Book a Free Call</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
