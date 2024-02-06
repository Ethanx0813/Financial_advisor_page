import React from 'react';
import Icon1 from './Icons/Icon1'; // Import Icon1 component
import './Management.css';
import Icon2 from './Icons/Icon2';
import Icon3 from './Icons/Icon3';
import Icon4 from './Icons/Icon4';
import Icon5 from './Icons/Icon5';
import Icon6 from './Icons/Icon6';

const Management = () => {
  return (
    <div className="container">
      {/* First row */}
      <div className="row mt-5"> {/* Added mt-5 class for margin-top */}
        {/* Item 1 */}
        <div className="col-sm-6 col-lg-4 mb-5">
          <Icon1 />
          <h6>Task Management</h6>
          <p>Choosing the  correct investment avenue</p>
          
        </div>
        
        {/* Item 2 */}
        <div className="col-sm-6 col-lg-4 mb-5">
          {/* Use your Icon2 component */}
          <Icon2 />
          <h6>Activity Reporting</h6>
          <p>Tracking investments and changing when needed.</p>
        </div>
        
        {/* Item 3 */}
        <div className="col-sm-6 col-lg-4 mb-5">
          {/* Use your Icon3 component */}
          <Icon3 />
          <h6>Smart Dashboards</h6>
          <p>acess wherever you are , whenever you want.</p>
        </div>
      </div>
      
      {/* Second row */}
      <div className="row">
        {/* Item 4 */}
        <div className="col-sm-6 col-lg-4 mb-5">
          {/* Use your Icon4 component */}
          <Icon4 />
          <h6>SSO Authentication</h6>
          <p>Don't just invest.visualize your future needs & invest accordingly.</p>
        </div>
        
        {/* Item 5 */}
        <div className="col-sm-6 col-lg-4 mb-5">
          {/* Use your Icon5 component */}
          <Icon5 />
          <h6>API Access</h6>
          <p>Investment is not a one time process re-evauluate your current condition & re-align yout past investments.</p>
        </div>
        
        {/* Item 6 */}
        <div className="col-sm-6 col-lg-4 mb-5">
          {/* Use your Icon6 component */}
          <Icon6 />
          <h6>Competitive Analysis</h6>
          <p>Market fluctuations making you worry about your investment reach us anytime.</p>
        </div>
      </div>
      
      {/* Add more rows as needed */}
      
    </div>
  );
};

export default Management;
