import Recipelist from "../Compnents/Recipelist/Recipelist";
import Recipedetails from "../Compnents/Recipedetails/Recipedetails";
import React, { useState } from "react";
import recipes from "../Data/recipes";
function Homepage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <Recipelist recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      <Recipedetails selectedRecipe={selectedRecipe} />
    </div>
  );
}

export default Homepage;
