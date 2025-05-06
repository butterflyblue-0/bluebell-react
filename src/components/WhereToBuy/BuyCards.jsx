import React from 'react';
import './BuyCards.css';

const cards = [
  {
    title: 'Store Locator',
    description: 'Find where Blue Bell products are sold at a store near you.',
    button: 'Find Store',
  },
  {
    title: 'Nationwide Shipping',
    description: 'We can ship Blue Bell anywhere in the United States.',
    button: 'Order & Ship',
  },
  {
    title: 'Same Day Local Delivery',
    description: 'Order online and have it delivered the same day.',
    button: 'Delivery Services',
  },
];

const BuyCards = () => {
  return (
    <div className="buy-cards-section-main">
        <div className="buy-cards-section">
      <h2 className="buy-cards-heading">Where to Buy</h2>
      <div className="buy-cards-container">
        {cards.map((card, index) => (
          <div className="buy-card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>{card.button}</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BuyCards;
