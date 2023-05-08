import React from 'react';
import './Input.css';

const Input = ({ variant = 'small', text, ...rest }) => {
  return (
    <input
      type="text"
      className={`input ${variant}`}
      placeholder={text}
      {...rest}
    />
  );
};

export default Input;
