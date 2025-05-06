import React from 'react';
import './ContentGrid.css';

import img1 from '../../assets/card1.jpg'; // Groom's Cake
import img2 from '../../assets/card2.jpg'; // Mother's Day
import img3 from '../../assets/card3.jpg'; // Giveaway

const ContentGrid = () => {
  return (
    <section className="content-grid">
      <img src={img1} alt="Groom's Cake" />
      <img src={img2} alt="Mother's Day" />
      <img src={img3} alt="Giveaway" />
    </section>
  );
};

export default ContentGrid;
