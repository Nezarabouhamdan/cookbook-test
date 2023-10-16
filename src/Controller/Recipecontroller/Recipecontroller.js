import { useState } from "react";

export const useSelectedRecipe = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return {
    selectedRecipe,
    setSelectedRecipe,
  };
};
