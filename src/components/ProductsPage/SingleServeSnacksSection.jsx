import React from 'react';
import './YearRoundSection.css'; // Replace with actual CSS file name

const singleServeSnacks = [
  { name: 'Homemade Vanilla Cup', image: 'single-vanilla-cup.png', link: '/products/single-vanilla-cup' },
  { name: 'Dutch Chocolate Cup', image: 'single-dutch-chocolate-cup.png', link: '/products/single-dutch-chocolate-cup' },
  { name: 'Mooo Bar®', image: 'single-mooo-bar.png', link: '/products/single-mooo-bar' },
  { name: 'Chocolate Fudge Bar', image: 'single-fudge-bar.png', link: '/products/single-fudge-bar' },
  { name: 'Krunch Bar', image: 'single-krunch-bar.png', link: '/products/single-krunch-bar' },
  { name: 'Vanilla Sandwich', image: 'single-vanilla-sandwich.png', link: '/products/single-vanilla-sandwich' },
  { name: 'Cookies ’n Cream Sandwich', image: 'single-cookies-cream.png', link: '/products/single-cookies-cream' },
];

const groupIntoRows = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const SingleServeSnacksSection = () => {
  const flavorRows = groupIntoRows(singleServeSnacks, 3);

  return (
    <section className="year-round-section">
      <div className="section-heading">
        <hr />
        <h2>Single-Serve Snacks</h2>
        <hr />
      </div>
      <h6 className="section-subheading">
        On-the-go goodness. These great-tasting frozen snacks are available in single-serve, individually-wrapped packages.
        <br />
      </h6>
       <span className='available'>
          Available in convenience stores.
        </span>
      <div className="flavor-grid">
        {flavorRows.map((row, index) => (
          <div className="flavor-row" key={index}>
            {row.map((item, idx) => (
              <a href={item.link} className="flavor-card" key={idx}>
                <img src={require(`../../assets/${item.image}`)} alt={item.name} />
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleServeSnacksSection;
