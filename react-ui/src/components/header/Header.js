import React from 'react';
import { InputGroup } from '../ui/input-group/InputGroup.js';
import { InputSelect } from '../ui/input-select/InputSelect.js';
//import { InputTextFL } from '../ui/input-text-fl/InputTextFL';
//import { InputText } from '../ui/input-text/InputText';
//import { UiButton } from '../ui/button/Button';
//import { UiBadge } from '../ui/badge/Badge';
import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <InputGroup>
        <input />
        <i className="icon-activity"></i>
        <InputSelect>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </InputSelect>
      </InputGroup>
    </header>
  );
};

export default Header;
