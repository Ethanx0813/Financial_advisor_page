// Advise.js
import React from 'react';
import './Advise.css';
import GreenCheckIcon from './GreenCheckIcon';
import BlueHouseIcon from './BlueHouseIcon';
import GreenPathIcon from './GreenPathIcon';

const Advise = () => {
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: '350px', fontSize: '2em' }}>Take the best path forward</h1>
        <p style={{ marginLeft: '300px', fontSize: '1em' }}>Actionable strategies and simple  financial products help you to grow faster.</p>
      </div>

      <div className="advise-container">
        <div className="advise-section">
          <h6 className="nav-title"> <BlueHouseIcon/> All-in-one solution</h6>
          <p className="nav-text text-body">Be it fund ,stock market bonds or any other investment find a one stop solution here.</p>
        </div>

        <div className="advise-section-parent">
          {/* Wrap these two sections in a parent div */}
          <div className="advise-section">
            <h6 className="nav-title"><GreenCheckIcon/>Automation on a whole new level</h6>
            <p className="nav-text text-body">Use automation to scale campaigns profitably and save time doing it.</p>
          </div>

          <div className="advise-section">
            <h6 className="nav-title"> <GreenPathIcon/>Solving problems for every team</h6>
            <p className="nav-text text-body">One tool for your company to share knowledge and ship projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advise;
