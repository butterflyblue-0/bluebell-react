import React from 'react';
import HistoryIntro from './HistoryIntro';
import CreameryDelivery from './CreameryDelivery';
import OurBest from './OurBest';
import ServiceMap from './ServiceMap';
import TasteOverYears from './TasteOverYears';
import VisitCreamery from './VisitCreamery';

const AboutPage = () => {
  return (
    <div>
      <HistoryIntro />
      <CreameryDelivery />
      <OurBest/>
      <ServiceMap/>
      <TasteOverYears/>
      <VisitCreamery/>
    </div>
  );
};

export default AboutPage;
