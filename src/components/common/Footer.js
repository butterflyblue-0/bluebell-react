
import React from 'react';
import './Footer.css';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/x.png';
import instagram from '../../assets/instagram.png';
import pinterest from '../../assets/pintrest.png';
import logo from '../../assets/logo-white.svg'; // logo in white or transparent version

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-top-links">
        <li>Products</li>
        <li>About Us</li>
        <li>Get The Scoop</li>
        <li>Visit Blue Bell</li>
        <li>Merch</li>
        <li>Where to Buy</li>
      </ul>

      <div className="footer-logo-container">
        <img src={logo} alt="Blue Bell Logo" className="footer-logo" />
      </div>

      <ul className="footer-bottom-links">
        <li>Home</li>
        <li>Careers</li>
        <li>Press Releases</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Accessibility</li>
        <li>Terms and Conditions</li>
      </ul>

      <div className="footer-icons">
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
        <img src={pinterest} alt="Pinterest" />
      </div>
    </footer>
  );
};

export default Footer;
