import React from 'react';

import "./DateTimeDisplay.css"

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? type === "Secs" ? 'sec cell danger' : 'cell danger' : type === "Secs" ? 'sec cell' : 'cell'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;