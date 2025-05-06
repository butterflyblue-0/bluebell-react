import React from 'react';
import ProductsIntro from './ProductsIntro';
import ProductCategories from './ProductCategories';
import YearRoundSection from './YearRoundSection';
import RotationalSection from './RotationalSection';
import NoSugarAddedSection from './NoSugarAddedSection';
import SherbetSection from './SherbetSection';
import TakeHomeSnacksSection from './TakeHomeSnacksSection';
import SingleServeSnacksSection from './SingleServeSnacksSection';


const ProductsPage = () => {
  return (
    <>  
      <ProductsIntro />
      <ProductCategories />
      <YearRoundSection/>
      <RotationalSection />
      <NoSugarAddedSection/>
      <SherbetSection/>
      <TakeHomeSnacksSection/>
      <SingleServeSnacksSection/>
    </>
  );
};

export default ProductsPage;
