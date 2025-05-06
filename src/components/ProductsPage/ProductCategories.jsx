import React from 'react';
import './ProductCategories.css';

const categories = [
  { id: 'year-round', label: 'Year-Round', image: 'year-round.png' },
  { id: 'rotational', label: 'Rotational', image: 'rotational.png' },
  { id: 'no-sugar', label: 'No Sugar Added', image: 'no-sugar.png' },
  { id: 'sherbet', label: 'Sherbet', image: 'sherbet.png' },
  { id: 'take-home', label: 'Take Home Snacks', image: 'take-home.png' },
  { id: 'single-serve', label: 'Single-Serve Snacks', image: 'single-serve.png' },
];

const ProductCategories = () => {
  return (
    <div className="category-row">
      {categories.map((cat) => (
        <a href={`#${cat.id}`} className="category-item" key={cat.id}>
          <img src={require(`../../assets/${cat.image}`)} alt={cat.label} />
          <p>{cat.label}</p>
        </a>
      ))}
    </div>
  );
};

export default ProductCategories;
