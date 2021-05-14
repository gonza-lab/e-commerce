import React from 'react';
import { UiBadge } from '../ui/badge/Badge';
import './Toolbar.scss';

export const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar__tool">
        <div>
          <i className="icon-heart"></i>
        </div>
        <span>Wishlist</span>
      </div>
      <div className="toolbar__tool">
        <div>
          <i className="icon-menu"></i>
        </div>
        <span>Menu</span>
      </div>
      <div className="toolbar__tool">
        <div>
          <i className="icon-shopping-cart"></i>
          <UiBadge pill>4</UiBadge>
        </div>
        <span>$265.00</span>
      </div>
    </div>
  );
};
