import React from "react";
import "./CountryStore.css";
import storeImage from "../../assets/store-left.png"; // replace with your image

const CountryStore = () => {
  return (
    <section className="country-store">
      <div className="country-store-wrapper">
        <div className="store-left">
          <img src={storeImage} alt="Country Store Items" />
        </div>
        
        <div className="store-right">
          <h2>
            Blue Bell <span>Country Store</span>
          </h2>
          <p>
            Find unique items inspired by your favorite brand of ice
            cream…clothing, magnets, koozies, gift certificates and so <br/>
            much more!
          </p>
          <a href="#" className="shop-btn">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CountryStore;
