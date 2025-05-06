import React, { useState } from "react";
import "./CreamerySlider.css";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpg";
import img3 from "../../assets/slide3.jpg";
import img4 from "../../assets/slide4.jpg";

const slides = [img1, img2, img3, img4];

const CreamerySlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % (slides.length - 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  return (
    <div className="creamery-slider">
      <button className="arrow left" onClick={handlePrev}>&#8249;</button>

      <div className="slider-image">
        <img src={slides[index]} alt="Left Image" />
      </div>

      <div className="slider-image">
        <img src={slides[index + 1]} alt="Right Image" />
      </div>

      <button className="arrow right" onClick={handleNext}>&#8250;</button>
    </div>
  );
};

export default CreamerySlider;
