import React from "react";
import RecipesHeader from "./RecipesHeader";
import RecipeGrid from "./RecipeGrid";
import NewsletterSignup from "./NewsletterSignup";
// You can import more components like RecipeList, Footer, etc. later

const Recipes = () => {
  return (
    <div>
      <RecipesHeader />
      <RecipeGrid/>
      <NewsletterSignup/>
    </div>
  );
};

export default Recipes;
