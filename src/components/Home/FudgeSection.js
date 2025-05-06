
import React, { useState } from 'react';
import './FudgeSection.css';

import fudge1 from '../../assets/fudge1.jpg';
import fudge2 from '../../assets/fudge2.jpg';
import fudge3 from '../../assets/fudge3.jpg';
import fudge4 from '../../assets/fudge4.jpg';
import fudge5 from '../../assets/fudge5.jpg';


const FudgeSection = () => {
  const images = [fudge1, fudge2, fudge3, fudge4, fudge5];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <section className="fudge-section">
      <div className="fudge-slider">
        <button className="arrow left" onClick={prevSlide}>&lt;</button>
        <img src={images[current]} alt="Fudge Slide" className="fudge-img" />
        <button className="arrow right" onClick={nextSlide}>&gt;</button>
      </div>

      <div className="fudge-info">
        <h2>Where to Buy</h2>
        <a href="/where-to-buy" className="cta-button">Find Blue Bell Near You</a>
      </div>
    </section>
  );
};

export default FudgeSection;
