import React, { useState } from 'react';
import './TasteOverYears.css';

const images = [
    'https://www.bluebell.com/wp-content/uploads/2022/04/BB-Historical-Image-01-WEB.jpg',
    'https://www.bluebell.com/wp-content/uploads/2022/04/BB-Historical-Image-02-WEB.jpg',
    'https://www.bluebell.com/wp-content/uploads/2022/04/BB-Historical-Image-03-WEB.jpg',
    'https://www.bluebell.com/wp-content/uploads/2022/04/BB-Historical-Image-04-WEB.jpg',
    'https://www.bluebell.com/wp-content/uploads/2022/04/BB-Historical-Image-05-WEB.jpg',  
];

const TasteOverYears = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const leftImage = images[index];
  const rightImage = images[(index + 1) % images.length];

  return (
    <div>
      {/* Scrollable background text section */}
      <div className="taste-intro-section">
        <h2>
          A taste of Blue Bell <span>Over the Years</span>
        </h2>
      </div>

      {/* Fullscreen 2-image slider */}
      <div className="taste-fullscreen-slider">
        <button className="nav-btn left" onClick={prevSlide}>&lt;</button>

        <div className="image-half left-img" style={{ backgroundImage: `url(${leftImage})` }}></div>
        <div className="image-half right-img" style={{ backgroundImage: `url(${rightImage})` }}></div>

        <button className="nav-btn right" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default TasteOverYears;

