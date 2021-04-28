import React, { useState } from 'react';
import './InputText.scss';

export const InputText  = ({ ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  return(
    <input
      className={'input-text' + ((isSelected) ? ' input-text__selected' : '')}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      {...props} 
    />
  );
};
