import React from 'react';
import './RotationalSection.css';

const rotationalFlavors = [
  { name: 'Bride’s Cake', image: 'brides-cake.png', link: '/products/brides-cake' },
  { name: 'Groom’s Cake', image: 'grooms-cake.png', link: '/products/grooms-cake' },
  { name: 'Peaches & Homemade Vanilla', image: 'peaches-homemade.png', link: '/products/peaches-homemade' },
  { name: 'Banana Fudge', image: 'banana-fudge.png', link: '/products/banana-fudge' },
  { name: 'Chocolate Peanut Butter Overload', image: 'choco-pb-overload.png', link: '/products/choco-pb-overload' },
  { name: 'Tin Roof', image: 'tin-roof.png', link: '/products/tin-roof' },
  { name: 'Butter Crunch', image: 'butter-crunch.png', link: '/products/butter-crunch' },
  { name: 'Oatmeal Cream Pie', image: 'oatmeal-pie.png', link: '/products/oatmeal-pie' },
  { name: 'Java Jolt', image: 'java-jolt.png', link: '/products/java-jolt' , className: 'small-image'},
  { name: 'Strawberry Toaster Pastry', image: 'strawberry-toaster.png', link: '/products/strawberry-toaster' , className: 'small-image'},
];

// helper to chunk into rows of 3
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const RotationalSection = () => {
  const flavorRows = chunkArray(rotationalFlavors, 3);

  return (
    <section id="rotational" className="rotational-section">
      <div className="section-heading">
        <hr />
        <h2>Rotational</h2>
        <hr />
      </div>
      <h6 className="section-subheading">
        Here for a limited time at the perfect time.
      </h6>
      <div className="flavor-grid">
      {flavorRows.map((row, index) => (
          <div className="flavor-row" key={index}>
            {row.map((flavor, i) => (
              <a
                href={flavor.link}
                className={`flavor-card ${flavor.className || ''}`}
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

export default RotationalSection;
