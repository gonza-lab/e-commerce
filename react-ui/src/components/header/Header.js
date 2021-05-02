import React from 'react';
//import { InputGroup } from '../ui/input-group/InputGroup.js';
import { InputTextFL } from '../ui/input-text-fl/InputTextFL';
//import { InputText } from '../ui/input-text/InputText';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <InputTextFL label="Name">
        <textarea placeholder="Text"></textarea>
      </InputTextFL>
    </header>
  );
};

export default Header;
