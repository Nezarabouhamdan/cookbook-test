import React from "react";

function RecipeDetails({ selectedRecipe }) {
  if (!selectedRecipe) {
    return <p>Select a recipe to view details</p>;
  }

  return (
    <div className="recipe-details">
      <h2>Recipe Details</h2>
      <h3>{selectedRecipe.name}</h3>
      <p>Author: {selectedRecipe.author}</p>
      <img
        style={{
          width: "200px",
          height: "100px",
        }}
        src={selectedRecipe.image}
        alt={selectedRecipe.name}
      />
      <h4>Ingredients:</h4>
      <ul>
        {selectedRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
