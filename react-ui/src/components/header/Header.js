import React from 'react';
import { UiContainer } from '../ui/container/Container';
import { HeaderBrand } from './brand/Brand';
import { HeaderTool } from './tool/Tool';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div>
        <UiContainer>
          <HeaderBrand />
          <div className="header-tools">
            <HeaderTool>
              <i className="icon-menu"></i>
            </HeaderTool>
            <HeaderTool>
                <i className="icon-user"></i>
            </HeaderTool>
            <HeaderTool>
                <i className="icon-shopping-cart"></i>
            </HeaderTool>
          </div>
        </UiContainer>
      </div>
    </header>
  );
};

export default Header;
