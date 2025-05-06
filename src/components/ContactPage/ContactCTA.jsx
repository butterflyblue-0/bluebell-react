import React from 'react';
import './ContactCTA.css';
import productImage from '../../assets/contact-cta.png'; // Save screenshot image here or use real product image

const ContactCTA = () => {
  return (
    <div className="contact-cta">
      <div className="cta-left">
        <img src={productImage} alt="Blue Bell Products" />
      </div>
      <div className="cta-right">
        <h2>Looking for Blue Bell Ice Cream?</h2>
        <p>Find Blue Bell products at your favorite store.</p>
        <button>Where to Buy</button>
      </div>
    </div>
  );
};

export default ContactCTA;
