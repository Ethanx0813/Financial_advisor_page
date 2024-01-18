// UnlockPotential.js
import React from 'react';
import './UnlockPotential.css';

const UnlockPotential = () => {
  return (
    <div className="unlock-container">
      <h2>Unlock your money's full potential. Modernize the way you invest.</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Others</th>
            <th>IMM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Helping reduce taxes</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Planning investments based on your unique problems</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Involving you in your investment decisions</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>After investment support</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Understand the instruments you are using to invest</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UnlockPotential;
