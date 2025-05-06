import React from 'react';
import './ServiceMap.css';
import mapImage from '../../assets/service-map.png'; // your map image

const ServiceMap = () => {
  return (
    <section className="service-map-section">
      <h2 className="map-heading">Blue Bell <span>Country</span></h2>
      <img src={mapImage} alt="Blue Bell service area map" className="map-image" />
    </section>
  );
};

export default ServiceMap;
