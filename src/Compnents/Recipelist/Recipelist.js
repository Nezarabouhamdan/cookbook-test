import React from "react";

function RecipeList({ recipes, onSelectRecipe }) {
  return (
    <div className="recipe-list">
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
