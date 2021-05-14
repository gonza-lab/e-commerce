import React from 'react';
import './Brand.scss';

export const HeaderBrand = () => {
  return (
    <div className="header-brand">
      <picture>
        <source
          media="(min-width:500px)"
          srcSet="https://cartzilla.createx.studio/img/logo-dark.png"
        />
        <img src="https://cartzilla.createx.studio/img/logo-icon.png" />
      </picture>
    </div>
  );
};
