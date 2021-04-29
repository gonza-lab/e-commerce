import React from 'react';
import { InputGroup } from '../ui/input-group/InputGroup.js';
import { InputSelect } from '../ui/input-select/InputSelect.js';
import './Header.scss';

export const Header = () => {
  return(
    <header className="Header">
      <InputGroup>
	<span>
	  <i class="icon-lock"></i>
	</span>
        <InputSelect>
	  <option>One</option>
	  <option>Two</option>
	  <option>Three</option>
        </InputSelect>
      </InputGroup>
    </header>
  );
};

export default Header;
