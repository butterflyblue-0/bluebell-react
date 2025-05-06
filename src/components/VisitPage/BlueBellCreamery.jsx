import React from 'react';
import './BlueBellCreamery.css';
import buildingImg from '../../assets/building.jpg'; // replace with actual image path

const BlueBellCreamery = () => {
  return (
    <div className="visit-page">
      <div className="visit-left">
        <h2 className="creamery-heading">Blue Bell Creamery</h2>
        <h1 className="location-name">Sylacauga, Alabama</h1>
        <p className="visit-text">
          Visit us in Sylacauga, Alabama! Stop by for a scoop of ice cream at the Ice Cream Parlor and grab a souvenir in our Country Store.
        </p>
        <div className="visit-buttons">
          <button className="plan-btn">Plan Your Visit</button>
          <button className="directions-btn">Get Directions</button>
        </div>
        <div className="hours-contact">
          <h4>HOURS</h4>
          <p><strong>Ice Cream Parlor</strong><br />Monday – Friday, 9am – 4:30pm (CT)<br /><em>CLOSED Monday, May 26</em></p>
          <p><strong>Country Store</strong><br />Monday – Friday, 9am – 4:30pm (CT)<br /><em>CLOSED Monday, May 26</em></p>
          <h4>CONTACT</h4>
          <p>423 North Norton Avenue Sylacauga, Alabama 35150</p>
          <p>(256) 249-6100<br />(888) 573-5286</p>
        </div>
      </div>
      <div className="visit-right">
        <img src={buildingImg} alt="Blue Bell Creamery" />
      </div>
    </div>
  );
};

export default BlueBellCreamery;
