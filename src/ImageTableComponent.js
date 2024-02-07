import React from 'react';
import './ImageTableComponent.css';
import Icon8 from './Icons/Icon8'; // Importing Icon8 component assuming it's located in './Icons/Icon8'
import Icon9 from './Icons/Icon9'; // Importing Icon9 component assuming it's located in './Icons/Icon9'
import Icon7 from './Icons/Icon7';

function ImageTableComponent() {
  return (
    <div style={{ backgroundColor: '#F1B9801A' }}>
      <div>
        <div className="w-lg-65 text-center mx-lg-auto mb-7">
          <h1 style={{ fontSize: '2rem' }}>Unlock money’s full potential</h1>
          <p className="fs-6">Modernize the way you invest.</p>
        </div>
        
        <div className="col-md-6 mx-auto">
          {/* Table */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="table-text-end">Others</th>
                <th scope="col" className="table-text-end">IMM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Helping reduce taxes</th>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-primary">
                    <Icon8 /> {/* Tick icon for Others */}
                  </span>
                </td>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-primary">
                    <Icon8 /> {/* Tick icon for IMM */}
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Planning Investment based on your problems</th>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-muted">
                    <Icon9/>
                  </span>
                </td>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-primary">
                    <Icon8/>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Involving you in your investment decision</th>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-muted">
                    <Icon9/>
                  </span>
                </td>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-primary">
                    <Icon8/>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">After investment support</th>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-muted">
                    <Icon9/>
                  </span>
                </td>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-primary">
                    <Icon8/>
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Understand the investments you are using to invest</th>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-muted">
                    <Icon9/>
                  </span>
                </td>
                <td className="table-text-end">
                  <span className="svg-icon svg-icon-sm text-primary">
                    <Icon8/>
                  </span>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
          {/* End Table */}
        </div>
      </div>
      <div style={{ marginLeft: '300px' }}>
      <div className="row col-sm-divider" style={{}}>
  <div className="col-sm-4" style={{ paddingRight: '20px' }}>
    <div className="text-center p-3">
      <h2 className="text-primary" style={{ fontSize: '3rem' }}>100+</h2>
      <p className="mb-0">clients from <br></br> salaried to freelancers</p>
    </div>
  </div>

  <div className="col-sm-4" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
    <div className="text-center p-3">
      <h2 className="text-primary" style={{ fontSize: '3rem' }}>5...</h2>
      <p className="mb-0" >years of experience in<br /> this business already</p>
    </div>
    <div className="text-center p-3">
      {/* <h2 className="text-primary">5...</h2> */}
      {/* <p className="mb-0">years of experience in<br /> this business already</p> */}
    </div>
  </div>

  <div className="col-sm-4" style={{ paddingLeft: '20px' }}>
    <div className="text-center p-3">
      {/* <h2 className="text-primary" style={{ fontSize: '3rem' }}>12k+</h2> */}
      {/* <p className="mb-0">resolved all kinds of questions and inquiries</p> */}
    </div>
  </div>
</div>
    </div>
    </div>
    
  );
}

export default ImageTableComponent;
