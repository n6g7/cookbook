import React from "react";

import { Ingredient, Unit, RecipeIngredient } from "../data";

interface IngredientsContextData {
  ingredients: Ingredient[];
  recipeIngredients: RecipeIngredient[];
  units: Unit[];
}

export const IngredientsContext = React.createContext<IngredientsContextData>({
  ingredients: [],
  recipeIngredients: [],
  units: [],
});
