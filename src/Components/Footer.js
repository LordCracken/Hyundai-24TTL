import React from 'react';
import footerLogo from '../images/footer-logo.svg';

const Footer = () => (
  <footer className="footer">
    <img src={footerLogo} alt="Hyundai Logo" className="footer__logo" />
    <p className="footer__text">
      All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product.
    </p>
    <p className="footer__text">
      Hyundai is a registered trademark of Hyundai Motor Company. All rights reserved, Hyundai Motor Middle East & Africa.
    </p>
  </footer>
);

export default Footer;
