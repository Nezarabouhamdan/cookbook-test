import React, { useState } from "react";
import "./App.css";
import curry from "./assets/curry.jpeg";
import ham from "./assets/Moist-Chicken-Burgers-1180x580.jpg";
const recipes = [
  {
    id: 1,
    author: "Jim",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
    image: curry,
    ingredients: ["Chicken", "Onion", "Tomato", "Spices"],
  },
  {
    id: 2,
    author: "Aravind",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
    image: ham,
    ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Bun"],
  },
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <div className="recipe-list">
        <h2>Recipe List</h2>
        <ul>
          {recipes.map((recipe) => (
            <li
              className="list"
              key={recipe.id}
              onClick={() => handleRecipeClick(recipe)}
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="recipe-details">
        <h2>Recipe Details</h2>
        {selectedRecipe ? (
          <div>
            <h3>{selectedRecipe.name}</h3>
            <p>Author: {selectedRecipe.author}</p>
            <img
              className="image"
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
        ) : (
          <p>Select a recipe to view details</p>
        )}
      </div>
    </div>
  );
}

export default App;
