import React from "react";
import "./RecipeGrid.css";

const recipes = [
  {
    title: "EASTER BUNNY ICE CREAM TREATS",
    image: require("../../assets/recipe1.jpg"),
  },
  {
    title: "JAVA JOLT MILKSHAKE",
    image: require("../../assets/recipe2.jpg"),
  },
  {
    title: "ICE CREAM NACHOS",
    image: require("../../assets/recipe3.jpg"),
  },
  {
    title: "BANANA SPLIT",
    image: require("../../assets/recipe4.jpg"),
  },
  {
    title: "MINT CHOCOLATE CHIP BROWNIE BITES",
    image: require("../../assets/recipe5.jpg"),
  },
  {
    title: "BLUE BELL COOKIE FLIGHT",
    image: require("../../assets/recipe6.jpg"),
  },
  {
    title: "ST. PATRICK’S DAY SHAKE",
    image: require("../../assets/recipe7.jpg"),
  },
  {
    title: "EASTER BASKET",
    image: require("../../assets/recipe8.jpg"),
  },
  {
    title: "RED, WHITE & BLUE BELL ICE CREAM PIE",
    image: require("../../assets/recipe9.jpg"),
  },
  {
    title: "STARS AND STRIPES STRAWBERRY SHAKE",
    image: require("../../assets/recipe10.jpg"),
  },
  {
    title: "MONSTER PUNCH",
    image: require("../../assets/recipe11.jpg"),
  },
  {
    title: "BOO BELL SNACK BARS",
    image: require("../../assets/recipe12.jpg"),
  },
];

const RecipeGrid = () => {
  return (
    <div className="recipe-grid-section">
      <h2 className="recipe-grid-heading">
        Blue Bell Ice Cream <span>Recipes</span>
      </h2>
      <div className="recipe-card-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <p className="recipe-category">Desserts</p>
            <h4 className="recipe-title">{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title} />
            <a href="#" className="make-it-link">Make It &gt;</a>
          </div>
        ))}
      </div>
      <button className="load-more-button">Load More Goodness</button>
    </div>
  );
};

export default RecipeGrid;
