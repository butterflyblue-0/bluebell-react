import React from "react";
import "./NewsArticle.css";

const NewsArticle = () => {
  return (
    <div className="news-article">
      <div className="left-side">
        <div className="ribbon">FEATURED</div>
        <img
          src={
            "https://www.bluebell.com/wp-content/uploads/2025/04/MG_5530_copy-winner-logo-news.jpg"
          }
          alt="Groom's Cake Ice Cream"
          className="article-image"
        />
      </div>
      <div className="right-side">
        <p className="news-label">News</p>
        <h2 className="news-heading">
          Groom’s Cake Ice Cream –<br />
          winner of the The Great Scoop
          <br />
          Revival Flavor Tournament –<br />
          is now in stores
        </h2>
        <p className="news-date">May 1, 2025</p>
        <p className="news-description">
          BRENHAM, Texas – Some Blue Bell fans are finally getting their
          happily...
        </p>
        <button className="news-button">Get the Scoop</button>
      </div>
    </div>
  );
};

export default NewsArticle;
