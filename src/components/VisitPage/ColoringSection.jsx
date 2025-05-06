import React from "react";
import "./ColoringSection.css";
import belleImage from "../../assets/belle-coloring.png"; // update with your actual image path

const ColoringSection = () => {
  return (
    <div className="coloring-section">
      <div className="coloring-left">
        <h2>
          Bring <span className="belle-script">Belle</span> to life!
        </h2>
        <p>
          Download our coloring page of Belle and bring her to life with your own unique colors!
        </p>
        <a href="/coloring-page.pdf" className="download-btn" download>
          Download Coloring Page
        </a>
      </div>

      <div className="coloring-right">
        <img src={belleImage} alt="Coloring Page" />
      </div>
    </div>
  );
};

export default ColoringSection;
