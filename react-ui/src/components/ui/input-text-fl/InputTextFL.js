import React from 'react';
import './InputTextFL.scss';

export const InputTextFL = ({ children, label }) => {
  return (
    <div className="input-text-fl">
      {children}
      <label>{label}</label>
    </div>
  );
};
