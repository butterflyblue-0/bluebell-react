import React from "react";
import "./VisitCreamery.css";

const VisitCreamery = () => {
  return (
    <div className="visit-creamery">
      <div className="visit-content">
        <h1>This Way to the Little <br /> Creamery</h1>
        <p>
          Plan a trip to see how we make ice cream at our production facilities
          located in Brenham, Texas and Sylacauga, Alabama. You can also treat
          yourself to a scoop of ice cream and shop our Country Store!
        </p>
        <div className="visit-buttons">
          <button className="btn white">Brenham, TX</button>
          <button className="btn outline">Sylacauga, AL</button>
        </div>
      </div>
    </div>
  );
};

export default VisitCreamery;
