import React from 'react';
import './VisitCreamery.css';


const VisitCreamery = () => {
  return (
    <section className="creamery-visit">
      <div className="creamery-left">
        <h2>
          Visit <span className="script">The Little Creamery</span>
        </h2>
        <p>Come see how your favorite flavors are churned out!</p>

        <div className="location-buttons">
          <button>Brenham, TX</button>
          <button>Sylacauga, AL</button>
        </div>
      </div>

      <div className="creamery-right">
        <img
          src="https://www.bluebell.com/wp-content/uploads/2021/06/visit-bluebell-cta-img.png"
          alt="Little Creamery statue and truck"
        />
      </div>
    </section>
  );
};

export default VisitCreamery;
