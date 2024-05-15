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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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
        date: date,
        time: time
      });
      setLoader(false);
      alert("Your form has been submitted");
      // Clear the form
      setName("");
      setEmail("");
      setDate("");
      setTime("");
    } catch (error) {
      alert(error.message);
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
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
      <h1 style={{ color: 'white', marginTop: 0, fontSize: '30px',padding:'10px',marginLeft:'10px' }}>
  Providing investment solutions whether<br></br> you are{' '}
  <span className="animated-text">{renderCurrentRole()}</span>
</h1>
       
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
            <h5 className='card-title'>Don't know where to start?</h5>
            <p className="card-text">Most of us know starting investing early is the smart thing to do, but we don't know how to start the research, how much amount to put in and how to divide your investments in different investment sectors. The longer you wait, more the loss. Book a free call.</p>
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
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={handleDateChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={time} onChange={handleTimeChange} required />
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
