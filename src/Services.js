import React, { useState, useEffect, useCallback } from 'react';
import './Services.css'; 
import GreenLeafIcon from './GreenLeafIcon';
import GreenLeafIcon2 from './GreenLeafIcon2';
import { db } from './firebase';
import Modal from './Modal';

const Services = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleCharIndex, setCurrentRoleCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const roles = ['Salaried,', 'A Businessperson,', 'Or a Freelancer'];
  const typingSpeed = 100;
  const deletingSpeed = 50; // Updated to be a bit slower than 0
  const holdDuration = 2000;

  useEffect(() => {
    if (isDeleting) {
      if (currentRoleCharIndex > 0) {
        setTimeout(() => {
          setCurrentRoleCharIndex(currentRoleCharIndex - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    } else {
      if (currentRoleCharIndex < roles[currentRoleIndex].length) {
        setTimeout(() => {
          setCurrentRoleCharIndex(currentRoleCharIndex + 1);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, holdDuration);
      }
    }
  }, [currentRoleCharIndex, isDeleting]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % (mainMessage.length + 1));
    }, 100);

    return () => {
      clearInterval(messageInterval);
    };
  }, []);

  const mainMessage =
    '90% of people who called agree that having someone to talk to about their financial plans has enhanced their financial journey.';

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const selectedDateTime = new Date(`${date}T${time}`);
      const oneHourBefore = new Date(selectedDateTime.getTime() - 60 * 60 * 1000);
      const oneHourAfter = new Date(selectedDateTime.getTime() + 60 * 60 * 1000);

      const bookingsSnapshot = await db.collection("contacts")
        .where("date", "==", date)
        .get();

      let conflict = false;
      bookingsSnapshot.forEach(doc => {
        const bookingTime = new Date(`${date}T${doc.data().time}`);
        if (bookingTime >= oneHourBefore && bookingTime <= oneHourAfter) {
          conflict = true;
        }
      });

      if (conflict) {
        setModalMessage("Sorry, the selected time slot is already booked or too close to another booking. Please choose another time.");
        setShowModal(true);
        setLoader(false);
        return;
      }

      await db.collection("contacts").add({
        name,
        email,
        phoneNumber,
        date,
        time
      });
      setLoader(false);
      setModalMessage("Your form has been submitted");
      setShowModal(true);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setDate("");
      setTime("");
    } catch (error) {
      setModalMessage(error.message);
      setShowModal(true);
      setLoader(false);
    }
  }, [name, email, phoneNumber, date, time]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else if (name === 'phoneNumber') setPhoneNumber(value);
  }, []);

  const handleDateChange = useCallback((e) => {
    setDate(e.target.value);
  }, []);

  const handleTimeChange = useCallback((e) => {
    setTime(e.target.value);
  }, []);

  const renderCurrentRole = () => {
    const currentRole = roles[currentRoleIndex];
    return currentRole.slice(0, currentRoleCharIndex);
  };

  const renderCurrentMessage = () => {
    return mainMessage.slice(0, currentMessageIndex);
  };

  return (
    <div className="services-container">
      <div className="left-section">
        <h1 style={{ color: 'white', marginTop: 0, fontSize: '30px', padding: '10px', marginLeft: '10px' }}>
          Providing investment solutions whether<br></br> you are{' '}
          <span className="animated-text yellow">{renderCurrentRole()}</span>
        </h1>
        <p style={{ fontSize: '20px',marginLeft:'20px' }}>Every unique financial problem can be solved by using simple investment solution.</p>
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
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handleChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={date} onChange={handleDateChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={time} onChange={handleTimeChange} required />
              </div>
              <button type="submit" style={{ background: loader ? "#ccc" : "orangered" }}>Book a Free Call</button>
            </form>
          </div>
        </div>
      </div>
      <Modal show={showModal} message={modalMessage} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Services;
