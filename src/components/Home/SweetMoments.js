import React from 'react';
import './SweetMoments.css';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/x.png';
import instagram from '../../assets/instagram.png';
import pinterest from '../../assets/pintrest.png';

const SweetMoments = () => {
  return (
    <section className="sweet-moments">
      <h2>Sweet Moments</h2>
      <p className="hashtag">#BlueBellIceCream</p>
      <div className="follow-row">
        <span>Follow us:</span>
        <div className="icons">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
          <a href="#"><img src={pinterest} alt="Pinterest" /></a>
        </div>
      </div>
    </section>
  );
};

export default SweetMoments;
