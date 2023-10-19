import React, { useState } from "react";
import RecipeList from "../Compnents/Recipelist/Recipelist";
import RecipeDetails from "../Compnents/Recipedetails/Recipedetails";
import recipesData from "../Data/recipes";
const AddRecipeForm = ({ onAddRecipe }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe({ name, author, image, ingredients: ingredients.split("\n") });
    setName("");
    setAuthor("");
    setImage("");
    setIngredients("");
    setShowForm(false);
  };

  return (
    <div>
      <h2>Add a New Recipe</h2>
      {showForm ? (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Ingredients
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </label>
          <button type="submit">Add Recipe</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Show Form</button>
      )}
    </div>
  );
};

function Homepage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState(recipesData);

  const handleAddRecipe = (newRecipe) => {
    const newRecipes = [...recipes, { ...newRecipe, id: recipes.length + 1 }];
    setRecipes(newRecipes);
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      <RecipeDetails selectedRecipe={selectedRecipe} />
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
}
export default Homepage;
