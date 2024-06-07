// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, message, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-message">
          <p>{message}</p>
        </div>
        <button className="modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
