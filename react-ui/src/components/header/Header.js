import React from 'react';
import { UiContainer } from '../ui/container/Container';
import { HeaderBrand } from './brand/Brand';
import { HeaderTool } from './tool/Tool';
import { UiBadge } from '../ui/badge/Badge';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div>
        <UiContainer>
          <HeaderBrand />
          <div className="header-tools">
            <HeaderTool hiddeInDesk>
              <div>
                <i className="icon-menu"></i>
              </div>
            </HeaderTool>
            <HeaderTool>
              <div>
                <i className="icon-user"></i>
              </div>
            </HeaderTool>
            <HeaderTool>
              <div className="header-tool__shop">
                <i className="icon-shopping-cart"></i>
                <UiBadge pill>5</UiBadge>
              </div>
            </HeaderTool>
          </div>
        </UiContainer>
      </div>
    </header>
  );
};

export default Header;
