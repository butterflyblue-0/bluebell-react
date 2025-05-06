import React from "react";
import "./CountryDaySection.css";

import leftIcon from "../../assets/left-icon.png"; // image inside orange box
import rightBg from "../../assets/right-bg.jpg"; // image inside right bg

const CountryDaySection = () => {
  return (
    <section className="country-day">
      {/* LEFT SIDE */}
      <div className="left-panel">
        <img src={leftIcon} alt="Left Icon" className="left-image" />
        <span className="left-title">
          Visit <span className="creamery">The Little Creamery</span>
        </span>
        <p className="left-description">
          Plan a trip to see how we make ice cream at our production facilities
          <br />
          located in Brenham, Texas and Sylacauga, Alabama. You can also treat
          <br />
          yourself to a scoop of ice cream and shop our Country Store!
        </p>
        <div className="left-buttons">
          <button className="btn-outline">Brenham, TX</button>
          <button className="btn-solid">Sylacauga, AL</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">
        <div className="right-overlay">
          <img src={rightBg} alt="Right Icon" className="right-image" />
          <h2>Over 100 Years</h2>
          <p>
            For over a century we’ve been crankin’ out more flavors than you can
            shake a spoon at! We use only the most delicious and highest quality
            ingredients. And, we top it off with the special skills and
            knowledge we have developed.
          </p>
          <a href="/learn-more" className="cta-button">
           About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CountryDaySection;
