import React from 'react';
import { InputGroup } from '../ui/input-group/InputGroup.js';
import { InputText } from '../ui/input-text/InputText.js';
import './Header.scss';

export const Header = () => {
  return(
    <header className="Header">
      <InputGroup>
	<span>
	  Name:
	</span>
	<InputText placeholder="Name" />
	<span>
	  Name:
	</span>
	<InputText placeholder="Name" />
	<span>
	  Name:
	</span>
      </InputGroup>
    </header>
  );
};

export default Header;
