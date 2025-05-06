import React from 'react';
import './NewsHeader.css';
import background from '../../assets/news-bg.jpg'; // Save your background image in assets and name it accordingly

const NewsHeader = () => {
  return (
    <div className="news-header" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="news-title">News & Press<br />Releases</h1>
    </div>
  );
};

export default NewsHeader;