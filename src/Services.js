import React, { useState, useEffect } from 'react';
import './Services.css'; 
import GreenLeafIcon from './GreenLeafIcon';
import GreenLeafIcon2 from './GreenLeafIcon2';
import { db } from './firebase'; // Adjust the path based on the actual location of firebase.js
// Assuming you have Firebase setup in firebase.js

const Services = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [loader, setLoader] = useState(false);

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

  const mainMessage =
    '90% of people who called agree that having someone to talk to about their financial plans has enhanced their financial journey.';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      await db.collection("contacts").add({
        name: name,
        email: email,
        annualIncome: annualIncome,
      });
      setLoader(false);
      alert("Your message has been submitted👍");
      // Clear the form
      setName("");
      setEmail("");
      setAnnualIncome("");
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'annualIncome') setAnnualIncome(value);
  };

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

  const renderCurrentMessage = () => {
    return mainMessage.slice(0, currentMessageIndex);
  };

  return (
    <div className="services-container">
      <div className="left-section">
        <h1 style={{ color: 'white', marginTop: 0, fontSize: '45px' }}>
          Providing investment solutions whether you are
        </h1>
        <h2 className="animated-text">{renderCurrentRole()}</h2>
        <p style={{fontSize: '25px'}}>Every unique financial problem can be solved by using simple investment solution.</p>
        <div className="message-boxes">
          <div className="message-box">
            <h4><GreenLeafIcon />24 Hours</h4>
            <p style={{ marginLeft: '60px' }}>Response time</p>
          </div>
          <div className="message-box">
            <h4><GreenLeafIcon2 />92%</h4>
            <p style={{ marginLeft: '60px' }}>Response time</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="book-free-call-container">
          <div className="book-free-call-form">
            <h5 className='card-title'>Book a Free call</h5>
            <p className="card-text">90% of people who called agree that having<br></br> someone to talk to about their financial plans<br></br> has enhanced their financial journey</p>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="annualIncome">Annual Income:</label>
                <select id="annualIncome" name="annualIncome" value={annualIncome} onChange={handleChange} required>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="100000-500000">100,000 - 500,000</option>
                  <option value="500000-1000000">500,000 - 1,000,000</option>
                  <option value="1000000-1500000">1,000,000 - 1,500,000</option>
                  <option value="1500000-2000000">1,500,000 - 2,000,000</option>
                </select>
              </div>
              <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>Book a Free Call</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
