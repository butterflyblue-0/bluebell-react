import React from 'react';
import './NewsGrid.css';
import newsItems from './newsData'; // We'll define dummy data in a separate file

const NewsGrid = () => {
  return (
    <div className="news-grid-section">
      <h2 className="news-grid-heading">
        Our <span>Latest</span> News
      </h2>

      <div className="news-card-container">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} className="news-card-image" />
            <div className="news-card-content">
              <p className="news-card-type">News</p>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-date">{item.date}</p>
              <a href="#" className="news-card-link">See Story &gt;</a>
            </div>
          </div>
        ))}
      </div>

      <button className="load-more-btn">Load More News</button>
    </div>
  );
};

export default NewsGrid;
