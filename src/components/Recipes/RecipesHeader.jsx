import React from "react";
import "./RecipesHeader.css";
import limeSherbet from "../../assets/lime-sherbet.jpg"; // use your correct image name

const RecipesHeader = () => {
  return (
    <div className="recipes-header">
      <div className="recipes-text">
        <h1>Ice Cream<br />Recipes</h1>
        <p>
          Create delicious treats featuring your favorite flavors of <br />
          Blue Bell Ice Cream!
        </p>
      </div>
      <div className="recipes-image-wrapper">
        <img src={limeSherbet} alt="Lime Sherbet Punch" />
      </div>
    </div>
  );
};

export default RecipesHeader;
