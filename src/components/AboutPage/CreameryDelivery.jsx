import React from 'react';
import './CreameryDelivery.css';
import deliveryImg from '../../assets/creamery-delivery.jpg'; // Make sure image path is correct

const CreameryDelivery = () => {
  return (
    <section className="creamery-wrapper">
      <div className="creamery-left">
        <img src={deliveryImg} alt="Blue Bell employee with ice cream" />
      </div>
      <div className="creamery-right">
        <div className="creamery-text">
          <h3>
            From our creamery to <span className="italic">Your</span><br />
            <span className="script">Table.</span>
          </h3>
          <p>
            Today, our product lineup includes Blue Bell Ice Cream, No Sugar Added Ice Cream, Sherbet and frozen snacks.
            Each one is distributed to supermarkets and food stores through our direct store delivery program. Direct store
            delivery means that no one other than a Blue Bell employee handles the product from the time it is made until it
            reaches the grocery store. This is one of the ways that Blue Bell ensures consumers get the freshest possible ice cream.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreameryDelivery;
