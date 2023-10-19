import React, { useState } from "react";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
