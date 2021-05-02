import React from 'react';
import './Button.scss';

export const UiButton = ({
  children,
  theme,
  rounded,
  icon,
  pill,
  ...props
}) => {
  return (
    <button
      className={
        'ui-button' +
        (theme ? ` ui-button__theme-${theme}` : '') +
        (rounded ? ' ui-button__rounded' : '') +
        (icon ? ' ui-button__icon' : '') +
        (pill ? ' ui-button__pill' : '')
      }
      {...props}
    >
      {children}
    </button>
  );
};
