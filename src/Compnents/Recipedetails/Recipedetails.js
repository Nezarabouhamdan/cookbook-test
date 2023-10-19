import React from "react";

const RecipeDetails = ({ selectedRecipe }) => {
  if (!selectedRecipe) {
    return <div>Select a recipe to view details.</div>;
  }

  return (
    <div>
      <h2>Recipe by: {selectedRecipe.author}</h2>
      <img
        style={{ height: "100px", width: "200px" }}
        src={selectedRecipe.image}
        alt={selectedRecipe.author}
      />
      <h3>Ingredients:</h3>
      <ul>
        {selectedRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
