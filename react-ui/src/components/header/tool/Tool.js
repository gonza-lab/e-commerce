import React from 'react';
import './Tool.scss';

export const HeaderTool = ({ children, hiddeInDesk }) => {
  return (
    <div
      className={
        'header-tool ' + (hiddeInDesk ? ' header-tool__hidde-in-desk' : '')
      }
    >
      {children}
    </div>
  );
};
