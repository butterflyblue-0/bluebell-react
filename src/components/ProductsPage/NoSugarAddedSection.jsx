import React from 'react';
import './NoSugarAddedSection.css';

const NoSugarAddedSection = () => {
  return (
    <section id="no-sugar" className="no-sugar-section">
      <div className="section-heading">
        <hr />
        <h2>No Sugar Added</h2>
        <hr />
      </div>
      <h6 className="section-subheading">
        Low in calories, but high in flavor. Less really is more.
      </h6>

      
      <div className="flavor-single">
        <a href="/products/no-sugar-country" className="flavor-card">
          <img
            src={require(`../../assets/no-sugar-vanilla.png`)}
            alt="No Sugar Added Country Vanilla"
          />
          <p>No Sugar Added Country Vanilla</p>
        </a>
      </div>
    </section>
  );
};

export default NoSugarAddedSection;
