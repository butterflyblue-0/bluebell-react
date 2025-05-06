import React, { useState } from 'react';
import './NewsSearchBar.css';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const NewsSearchBar = () => {
  const [category, setCategory] = useState('All News');

  return (
    <div className="news-search-bar">
      <h2 className="treat-heading">
        <span className="italic">Treat</span> yourself to...
      </h2>

      <div className="filter-dropdown">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All News</option>
          <option>News</option>
          <option>New Flavors</option>
        </select>
        <FaChevronDown className="dropdown-icon" />
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default NewsSearchBar;
