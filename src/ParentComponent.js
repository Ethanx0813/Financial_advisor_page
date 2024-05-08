import React, { useState } from 'react';
import Image from './Image';
import Services from './Services';

const ParentComponent = () => {
  const [showServices, setShowServices] = useState(false);

  const handleButtonClick = () => {
    setShowServices(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div>
      {!showServices ? (
        <Image />
      ) : (
        <Services />
      )}
      {!showServices && (
        <button
          className="orange-button"
          onClick={handleButtonClick}
        >
          Learn Your Secret Power
        </button>
      )}
    </div>
  );
};

export default ParentComponent;
