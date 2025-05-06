import React from 'react';
import Hero from '../../components/Home/Hero';
import FudgeSection from '../../components/Home/FudgeSection';
import CountryDaySection from '../../components/Home/CountryDaySection';
import CountryStore from '../../components/Home/CountryStore';
import SweetMoments from '../../components/Home/SweetMoments';
import ContentGrid from '../../components/Home/ContentGrid';

const HomePage = () => {
    return (
      <div className="home-page">
       
       <Hero/>
       <FudgeSection/>
       <CountryDaySection/>
       <CountryStore/>
       <SweetMoments/>
       <ContentGrid/>
      
      </div>
    );
  };
  
  export default HomePage;
