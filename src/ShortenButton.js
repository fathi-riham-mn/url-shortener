// ShortenButton.js
import React from 'react';

const ShortenButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="shorten-button">Shorten</button>
  );
};

export default ShortenButton;
