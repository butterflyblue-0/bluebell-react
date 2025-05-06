import React from "react";
import "./PlanVisit.css";
import parlorImg from "../../assets/parlor.jpg"; // update path if needed

const PlanVisit = () => {
  return (
    <div className="visit-creamery-wrapper">
      {/* Title and Tabs */}
      <div className="visit-tabs">
        <h2 className="visit-title">Plan Your Visit</h2>
        <div className="tab-links">
          <span className="active">Ice Cream Parlor</span>
          <div className="divider" />
          <span>Country Store</span>
          <div className="divider" />
          <span>FAQ</span>
        </div>
      </div>

      {/* Ice Cream Parlor Section */}
      <div className="ice-cream-parlor-section">
        <div className="ice-cream-left">
          <img src={parlorImg} alt="Ice Cream Parlor" />
        </div>
        <div className="ice-cream-right">
          <h5>WELCOME TO</h5>
          <h2>The Ice Cream Parlor</h2>
          <p className="hours">Hours: Monday – Friday, 9am – 4:30pm (CT)</p>
          <p>
            Enjoy a scoop, or two, of your favorite flavor of Blue Bell Ice Cream. Our Ice Cream Parlor offers a wide selection of our top-selling ice cream and a few you can only find in ice cream parlors!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanVisit;
