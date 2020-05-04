import React from 'react';
import './PrintButton.scss';

const PrintButton = () => {
  const handleClick = () => {
    window.print();
  };

  return (
    <button className="print-btn" onClick={handleClick}>Print it! (ctrl + p)</button>
  )
};

export default PrintButton;
