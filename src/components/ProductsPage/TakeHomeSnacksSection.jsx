
// import React from 'react';
// import './TakeHomeSnacksSection.css';

// import vanillaCups from '../../assets/vanilla-cups.png';
// import dutchChocoCups from '../../assets/dutch-choco-cups.png';
// import birthdayCakeCups from '../../assets/birthday-cake-cups.png';
// import sundaeCups from '../../assets/sundae-cups.png';
// import sandwiches from '../../assets/sandwiches.png';
// import moooBars from '../../assets/mooo-bars.png';
// import fudgeBars from '../../assets/fudge-bars.png';
// import krunchBars from '../../assets/krunch-bars.png';
// import miniSandwiches from '../../assets/mini-sandwiches.png';
// import bananaPops from '../../assets/banana-pops.png';

// const takeHomeSnacks = [
//   { name: 'Homemade Vanilla Cups', image: vanillaCups, link: '/products/vanilla-cups' },
//   { name: 'Dutch Chocolate and Homemade Vanilla Cups', image: dutchChocoCups, link: '/products/dutch-choco-cups' },
//   { name: 'Birthday Cake Cups', image: birthdayCakeCups, link: '/products/birthday-cake-cups' },
//   { name: 'Sundae Cups', image: sundaeCups, link: '/products/sundae-cups' },
//   { name: 'Ice Cream Sandwiches', image: sandwiches, link: '/products/sandwiches' },
//   { name: 'Mooo Bars®', image: moooBars, link: '/products/mooo-bars' },
//   { name: 'Fudge Bars', image: fudgeBars, link: '/products/fudge-bars' },
//   { name: 'Krunch Bars', image: krunchBars, link: '/products/krunch-bars' },
//   { name: 'Mini Sandwiches', image: miniSandwiches, link: '/products/mini-sandwiches' },
//   { name: 'Banana Pops', image: bananaPops, link: '/products/banana-pops' },
// ];

// const chunkArray = (arr, size) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// };

// const TakeHomeSnacksSection = () => {
//   const snackRows = chunkArray(takeHomeSnacks, 3);

//   return (
//     <section className="snacks-section" id="take-home">
//       <h2 className="section-title">
//         <span className="line" />
//         Take Home Snacks
//         <span className="line" />
//       </h2>
//       <h6 className="section-subtitle">
//         Sometimes we travel in packs. Enjoy these take home snacks.<br />
//         <span className="light">Available in supermarkets.</span>
//       </h6>

//       <div className="snacks-grid">
//         {snackRows.map((row, index) => (
//           <div className={`snack-row ${row.length === 1 ? 'center' : ''}`} key={index}>
//             {row.map((snack, i) => (
//               <a className="snack-item" href={snack.link} key={i}>
//                 <img src={snack.image} alt={snack.name} />
//                 <p>{snack.name}</p>
//               </a>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TakeHomeSnacksSection;

import React from 'react';
import './TakeHomeSnacksSection.css';

import vanillaCups from '../../assets/vanilla-cups.png';
import dutchChocoCups from '../../assets/dutch-choco-cups.png';
import birthdayCakeCups from '../../assets/birthday-cake-cups.png';
import sundaeCups from '../../assets/sundae-cups.png';
import sandwiches from '../../assets/sandwiches.png';
import moooBars from '../../assets/mooo-bars.png';
import fudgeBars from '../../assets/fudge-bars.png';
import krunchBars from '../../assets/krunch-bars.png';
import miniSandwiches from '../../assets/mini-sandwiches.png';
import bananaPops from '../../assets/banana-pops.png';

const takeHomeSnacks = [
  { name: 'Homemade Vanilla Cups', image: vanillaCups, link: '/products/vanilla-cups' },
  { name: 'Dutch Chocolate and Homemade Vanilla Cups', image: dutchChocoCups, link: '/products/dutch-choco-cups' },
  { name: 'Birthday Cake Cups', image: birthdayCakeCups, link: '/products/birthday-cake-cups' },
  { name: 'Sundae Cups', image: sundaeCups, link: '/products/sundae-cups' },
  { name: 'Ice Cream Sandwiches', image: sandwiches, link: '/products/sandwiches' },
  { name: 'Mooo Bars®', image: moooBars, link: '/products/mooo-bars' },
  { name: 'Fudge Bars', image: fudgeBars, link: '/products/fudge-bars' },
  { name: 'Krunch Bars', image: krunchBars, link: '/products/krunch-bars' },
  { name: 'Mini Sandwiches', image: miniSandwiches, link: '/products/mini-sandwiches' },
  { name: 'Banana Pops', image: bananaPops, link: '/products/banana-pops' },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const TakeHomeSnacksSection = () => {
  const snackRows = chunkArray(takeHomeSnacks, 3);

  return (
    <section id="take-home" className="year-round-section">
      <div className="section-heading">
        <hr />
        <h2>Take Home Snacks</h2>
        <hr />
      </div>
      <p className="section-subheading">
        Sometimes we travel in packs. Enjoy these take home snacks.<br />
        <span className="light">Available in supermarkets.</span>
      </p>

      <div className="flavor-grid">
        {snackRows.map((row, index) => (
          <div className={`flavor-row ${row.length === 1 ? 'center-row' : ''}`} key={index}>
            {row.map((snack, i) => (
              <a className="flavor-card" href={snack.link} key={i}>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.name}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TakeHomeSnacksSection;
