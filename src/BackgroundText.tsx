import React from 'react';
import './style.css';

interface BackgroundTextProps {
  text: string;
}

const BackgroundText: React.FC<BackgroundTextProps> = ({ text }) => {
  const textArray = new Array(1000).fill(text); // Create an array with 1000 elements

  return (
    <div className="background-text">
      {textArray.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default BackgroundText;