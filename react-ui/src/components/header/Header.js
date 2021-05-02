import React from 'react';
//import { InputGroup } from '../ui/input-group/InputGroup.js';
import { InputTextFL } from '../ui/input-text-fl/InputTextFL';
//import { InputText } from '../ui/input-text/InputText';
//import { UiButton } from '../ui/button/Button';
//import { UiBadge } from '../ui/badge/Badge';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <InputTextFL label="Name">
        <input placeholder="n" />
      </InputTextFL>
    </header>
  );
};

export default Header;
