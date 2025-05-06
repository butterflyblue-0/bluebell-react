import React from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-left">
        <h2 className="newsletter-heading">
          You heard it here <span>First!</span>
        </h2>
        <p className="newsletter-description">
          Get recipes, info on new releases and exclusive Blue Bell offers right to your inbox when you sign up.
        </p>
      </div>

      <div className="newsletter-right">
        <input type="email" className="newsletter-input" placeholder="Enter your email" />
        <div className="captcha-placeholder">
          <input type="checkbox" id="captcha" />
          <label htmlFor="captcha">I'm not a robot</label>
        </div>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default NewsletterSignup;
