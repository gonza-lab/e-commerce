import React, { useState } from 'react';
import './InputSelect.scss';

export const InputSelect = ({ children, ...props}) => {
  const [isSelected, setIsSelected] = useState(false);

  return(
    <select
      className={'input-group__input input-select' + ((isSelected) ? ' input-group__input-selected' : '')}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      {...props}
    >
      {children}
    </select>
  );
};
