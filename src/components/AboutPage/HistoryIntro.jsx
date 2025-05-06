import React from 'react';
import './HistoryIntro.css';
import historyImage from '../../assets/about-history.jpg'; // Replace with your actual image file

const HistoryIntro = () => {
  return (
    <section className="history-wrapper">
      <div className="history-left">

        <h2>About Us</h2>

        <div className="history-left-inside">
        <h4>It all started on a hot summer day in</h4>
        <h1>1907</h1>
        </div>
      
        <p>
          A group of local businessmen in Brenham, Texas, decided to establish the Brenham Creamery Company and make butter from excess cream brought in by area farmers. A few years later, the creamery began making ice cream and delivering it to neighbors by horse and wagon.
          It was in 1930 that the company changed its name to Blue Bell Creameries after the native Texas bluebell wildflower.
          Butter was produced until 1958 when Blue Bell began to focus full time on making ice cream.
        </p>
        
      </div>

      
      <div className="history-right">
        <img src={historyImage} alt="Blue Bell workers in 1907" />
      </div>
    </section>
  );
};

export default HistoryIntro;
