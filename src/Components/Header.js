import React from 'react';
import logo from '../images/logo.svg';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        <img src={logo} className="logo header__logo" alt="Hyundai Logo" />
      </div>
    </div>
  </header>
);

export default Header;
