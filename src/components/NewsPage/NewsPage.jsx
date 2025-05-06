import React from 'react';
import NewsHeader from './NewsHeader';
import NewsArticle from './NewsArticle';
import NewsSearchBar from './NewsSearchBar';
import NewsGrid from './NewsGrid';
import PressInquiry from './PressInquiry';
import NewsletterSignup from './NewsletterSignup';

const NewsPage = () => {
  return (
    <div>
      <NewsHeader />
      <NewsArticle />
      <NewsSearchBar/>
      <NewsGrid/>
      <PressInquiry/>
      <NewsletterSignup/>
    </div>
  );
};

export default NewsPage;
