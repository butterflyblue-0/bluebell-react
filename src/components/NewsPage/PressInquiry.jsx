import React from 'react';
import './PressInquiry.css';

const PressInquiry = () => {
  return (
    <div className="press-inquiry">
      <h2 className="press-heading">
        PR & Press <span>Inquiries</span>
      </h2>
      <p className="press-description">
        For media inquiries only, please contact us at{' '}
        <a href="mailto:media@bluebell.com">media@bluebell.com</a>.
      </p>
      <button className="press-button">Get in Touch</button>
    </div>
  );
};

export default PressInquiry;
