import React from 'react';
import { InputGroup } from '../ui/input-group/InputGroup.js';
import { InputText } from '../ui/input-text/InputText.js';
import { InputTextArea } from '../ui/input-textarea/InputTextArea.js';
import './Header.scss';

export const Header = () => {
  return(
    <header className="Header">
      <InputGroup>
	<span>
	  <i class="icon-lock"></i>
	</span>
	<InputTextArea placeHolder="Password" />
      </InputGroup>
    </header>
  );
};

export default Header;
