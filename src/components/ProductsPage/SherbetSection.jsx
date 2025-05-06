import React from 'react';
import './SherbetSection.css';

const sherbetFlavors = [
  { name: 'Rainbow Sherbet', image: 'rainbow-sherbet.png', link: '/products/rainbow-sherbet' },
  { name: 'Lime Sherbet', image: 'lime-sherbet.png', link: '/products/lime-sherbet' },
  { name: 'Orange Sherbet', image: 'orange-sherbet.png', link: '/products/orange-sherbet' },
  { name: 'Pineapple Sherbet', image: 'pineapple-sherbet.png', link: '/products/pineapple-sherbet' },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const SherbetSection = () => {
  const flavorRows = chunkArray(sherbetFlavors, 3);

  return (
    <section id="sherbet" className="sherbet-section">
      <div className="section-heading">
        <hr />
        <h2>Sherbet</h2>
        <hr />
      </div>
      <h6 className="section-subheading">
        Made with refreshing fruits that are low in fat and naturally delicious.
      </h6>

      
      <div className="flavor-grid">
        {flavorRows.map((row, index) => (
          <div
            className={`flavor-row ${row.length === 1 ? 'center-row' : ''}`}
            key={index}
          >
            {row.map((flavor, i) => (
              <a
                href={flavor.link}
                className="flavor-card"
                key={i}
              >
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

export default SherbetSection;
