import React, { useState } from 'react';

export const InputTextArea = ({ ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  return(
    <textarea
      className={'input-group__input' + ((isSelected) ? ' input-group__input-selected' : '')}
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      {...props}
    ></textarea>
  );
};
