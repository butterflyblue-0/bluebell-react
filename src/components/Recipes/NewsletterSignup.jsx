import React from "react";
import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-text">
        <h2>
          <span>You heard it here </span><em>First!</em>
        </h2>
        <p>
          Get recipes, info on new releases and <br />
          exclusive Blue Bell offers right to your inbox.
        </p>
      </div>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <div className="right-form">
        <div className="captcha-placeholder">[reCAPTCHA]</div>
        <button>Sign Up</button>
        </div>
       
      </div>
    </div>
  );
};

export default NewsletterSignup;
