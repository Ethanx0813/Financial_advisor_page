// PositionsAndNames.js
import React from 'react';
import './PositionsWithNames.css';

const PositionsWithNames = () => {
  return (
    <div className="positions-and-names">
      <div className="position">
        <h3>Position 1</h3>
        <p>Ajay Poddar</p>
        <p>Works at XYZ</p>
      </div>

      <div className="position">
        <h3>Position 2</h3>
        <p>Name 2</p>
        <p>Works at ABC</p>
      </div>

      <div className="position">
        <h3>Position 3</h3>
        <p>Name 3</p>
        <p>Works at LMN</p>
      </div>
    </div>
  );
};

export default PositionsWithNames;
