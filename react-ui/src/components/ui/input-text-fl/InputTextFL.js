import React from 'react';
import './InputTextFL.scss';

export const InputTextFL = ({ label, ...props }) => {
  return (
    <div className="input-text-fl">
      <input placeholder={label} {...props} />
      <label>{label}</label>
    </div>
  );
};
