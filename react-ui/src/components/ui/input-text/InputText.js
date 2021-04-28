import React, { useState } from 'react';

export const InputText  = ({ ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  return(
    <input
      className={'input-group__input' + ((isSelected) ? ' input-group__input-selected' : '')}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      {...props} 
    />
  );
};