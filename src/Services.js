// Services.js
import React, { useState } from 'react';
import './Services.css';


const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    annualIncome: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle form submission logic (Firebase or any other method)

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      annualIncome: '',
    });
  };

  return (
    <div className="services-container">
      <h2>Services We Provide</h2>
      <ul className="services-list">
        <li>Providing investment solutions whether you are salaried, a businessperson, or a freelancer.</li>
        <li>Every unique freelancing problem can be solved by using simple investment solutions.</li>
        <li>90% of people who called agree that having someone to talk to about their financial plans has enhanced their financial journey.</li>
      <li> Actionable strategies and simple financial products help you grow faster</li>
      </ul>

      <div className="book-free-call-container">
        <div className="book-free-call-form">
          <h2>REGISTER NOW - Take your free trial</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="annualIncome">Annual Income:</label>
              <select
                id="annualIncome"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="100000-500000">100,000 - 500,000</option>
                <option value="500000-1000000">500,000 - 1,000,000</option>
                <option value="1000000-1500000">1,000,000 - 1,500,000</option>
                <option value="1500000-2000000">1,500,000 - 2,000,000</option>
              </select>
            </div>
            <button type="submit">Book a Free Call</button>
          </form>
          
        </div>
       
      </div>
    </div>
  );
};

export default Services;
