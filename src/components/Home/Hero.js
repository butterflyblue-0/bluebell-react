import React, { useState } from "react";
import "./Hero.css";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";

const images = [hero1, hero2, hero3, hero4, hero5];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // const nextSlide = () => setCurrent((current + 1) % length);
  // const prevSlide = () => setCurrent((current - 1 + length) % length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  console.log(current);

  return (
    <section className="hero-slider">
      <button className="arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &gt;
      </button>

      {images.map((img, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <img src={img} alt="hero" className="slide-img" />
          )}


        </div>
      ))}
    </section>
  );
};

export default Hero;
