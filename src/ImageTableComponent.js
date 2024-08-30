import React from 'react';
import './ImageTableComponent.css';
import Icon8 from './Icons/Icon8';
import Icon9 from './Icons/Icon9';
import Icon7 from './Icons/Icon7'; // Assuming Icon7 is needed elsewhere

function ImageTableComponent() {
  return (
    <div style={{ backgroundColor: '#F1B9801A' }}>
      <div className="w-lg-65 text-center mx-lg-auto mb-7">
        <h1 style={{ fontSize: '2rem' }}>Unlock money’s full potential</h1>
        <p className="fs-6">Modernize the way you invest.</p>
      </div>

      <div className="col-md-6 mx-auto">
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
                  <Icon9 /> {/* Cross icon for Others */}
                </span>
              </td>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-primary">
                  <Icon8 /> {/* Tick icon for IMM */}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Involving you in your investment decision</th>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-muted">
                  <Icon9 /> {/* Cross icon for Others */}
                </span>
              </td>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-primary">
                  <Icon8 /> {/* Tick icon for IMM */}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">After investment support</th>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-muted">
                  <Icon9 /> {/* Cross icon for Others */}
                </span>
              </td>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-primary">
                  <Icon8 /> {/* Tick icon for IMM */}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Understand the investments you are using to invest</th>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-muted">
                  <Icon9 /> {/* Cross icon for Others */}
                </span>
              </td>
              <td className="table-text-end">
                <span className="svg-icon svg-icon-sm text-primary">
                  <Icon8 /> {/* Tick icon for IMM */}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row col-sm-divider" style={{ marginLeft: '300px' }}>
        <div className="col-sm-4 text-center p-3">
          <h2 className="text-primary" style={{ fontSize: '3rem' }}>100+</h2>
          <p className="mb-0">clients from <br /> salaried to freelancers</p>
        </div>
        <div className="col-sm-4 text-center p-3">
          <h2 className="text-primary" style={{ fontSize: '3rem' }}>5...</h2>
          <p className="mb-0">years of experience in<br /> this business already</p>
        </div>
        <div className="col-sm-4 text-center p-3">
          {/* You can uncomment these lines if you decide to display additional information */}
          {/* <h2 className="text-primary" style={{ fontSize: '3rem' }}>12k+</h2> */}
          {/* <p className="mb-0">resolved all kinds of questions and inquiries</p> */}
        </div>
      </div>
    </div>
  );
}

export default ImageTableComponent;
