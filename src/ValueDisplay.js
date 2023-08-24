import React from 'react';
import './ValueDisplay.css';

const ValueDisplay = ({ value }) => {
    const determineFontSize = (value) => {
      if (value.length<10) {
        return 'font1';
      } else if (value.length<11) {
        return 'font2';
      } else if (value.length<12) {
        return 'font3';
      } else if (value.length<13) {
        return 'font4';
      } else if (value.length<14) {
        return 'font5';
      } else if (value.length<15) {
        return 'font6';
      } else {
        return 'font7';
      }
    };
  
    const fontSizeClass = determineFontSize(value);
  
    return (
      <div className={`value-display ${fontSizeClass}`}>
        {value}
      </div>
    );
  };
export default ValueDisplay;