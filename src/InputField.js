// InputField.js
import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={onChange} placeholder="Enter URL" className="input-field" />
  );
};

export default InputField;
