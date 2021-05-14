import React from 'react';
import './Container.scss';

export const UiContainer = ({ children, ...props }) => {
  return (
    <div className="ui-container" {...props}>
      {children}
    </div>
  );
};
