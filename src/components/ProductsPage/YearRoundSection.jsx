
import React from 'react';
import './YearRoundSection.css';

const flavors = [
  { name: 'Homemade Vanilla', image: 'homemade-vanilla.png', link: '/products/homemade-vanilla' },
  { name: 'Cookies ‘n Cream', image: 'cookies-cream.png', link: '/products/cookies-n-cream' },
  { name: 'Dutch Chocolate', image: 'dutch-chocolate.png', link: '/products/dutch-chocolate' },
  { name: 'A&W® Root Beer Float', image: 'root-beer.png', link: '/products/root-beer' },
  { name: 'Dr Pepper® Float', image: 'dr-pepper.png', link: '/products/dr-pepper' },
  { name: 'The Great Divide®', image: 'great-divide.png', link: '/products/great-divide' },
  { name: 'Moo-llennium Crunch®', image: 'moo-llennium-crunch.png', link: '/products/moo-llennium-crunch' },
  { name: 'Cookie Two Step®', image: 'cookie-two-step.png', link: '/products/cookie-two-step' },
  { name: 'Mint Chocolate Chip', image: 'mint-chocolate-chip.png', link: '/products/mint-chocolate-chip' },
  { name: 'Pecan Pralines ’n Cream', image: 'pecan-pralines.png', link: '/products/pecan-pralines' },
  { name: 'Chocolate Chip Cookie Dough', image: 'chocolate-chip-cookie-dough.png', link: '/products/chocolate-chip-cookie-dough' },
  { name: 'Strawberries & Homemade Vanilla', image: 'strawberries-and-homemade-vanilla.png', link: '/products/strawberries-and-homemade-vanilla' },
  { name: 'Rocky Road', image: 'rocky-road.png', link: '/products/rocky-road' },
  { name: 'Ultimate Neapolitan', image: 'ultimate-neapolitan.png', link: '/products/ultimate-neapolitan' },
  { name: 'Natural Vanilla Bean', image: 'natural-vanilla-bean.png', link: '/products/natural-vanilla-bean' },
  { name: 'Strawberry', image: 'strawberry.png', link: '/products/strawberry' },
  { name: 'Pistachio Almond', image: 'pistachio-almond.png', link: '/products/pistachio-almond' },
  { name: 'Buttered Pecan', image: 'buttered-pecan.png', link: '/products/buttered-pecan' },
  { name: 'Chocolate Chip', image: 'chocolate-chip.png', link: '/products/chocolate-chip' },
  { name: 'Banana Pudding', image: 'banana-pudding.png', link: '/products/banana-pudding' },
  { name: 'Milk Chocolate', image: 'milk-chocolate.png', link: '/products/milk-chocolate' },
  { name: 'Cherry Vanilla', image: 'cherry-vanilla.png', link: '/products/cherry-vanilla' },
  { name: 'Coffee', image: 'coffee.png', link: '/products/coffee' },
  { name: 'Black Walnut', image: 'black-walnut.png', link: '/products/black-walnut' },
  { name: 'Gooey Butter Cake', image: 'gooey-butter-cake.png', link: '/products/gooey-butter-cake' },
  { name: 'Cotton Candy', image: 'cotton-candy-pint.png', link: '/products/cotton-candy-pint' },

];

// helper to split array into chunks of 3
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const YearRoundSection = () => {
  const flavorRows = chunkArray(flavors, 3);

  return (
    <section id="year-round" className="year-round-section">
      <div className="section-heading">
        <hr />
        <h2>Year–Round</h2>
        <hr />
      </div>
      <p className="section-subheading">
        <strong>Good news!</strong> Our most popular flavors are available in stores throughout the year.
      </p>

      <div className="flavor-grid">
        {flavorRows.map((row, index) => (
          <div className="flavor-row" key={index}>
            {row.map((flavor, i) => (
              <a href={flavor.link} className="flavor-card" key={i}>
                <img src={require(`../../assets/${flavor.image}`)} alt={flavor.name} />
                <p>{flavor.name}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default YearRoundSection;

