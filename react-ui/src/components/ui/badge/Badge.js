import React from 'react';
import './Badge.scss';

export const UiBadge = ({ children, rounded, pill, ...props }) => {
  return (
    <span
      className={
        'ui-badge' +
        (pill ? ' ui-badge__pill' : '')
      }
			{...props}
    >
      {children}
    </span>
  );
};
