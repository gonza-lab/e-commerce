import React, { useState } from 'react';
import './InputSelect.scss';

export const InputSelect = ({ children, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  return <select {...props}>{children}</select>;
};
