import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { ingredientsSelector } from './ingredients'
import { recipeIdSelector } from './router'

export const rawRecipesSelector = state => state.recipes.list

export const recipesSelector = createSelector(
  rawRecipesSelector,
  ingredientsSelector,
  (rawRecipes, ingredients) => objectToArray(rawRecipes).map(recipe => ({
    ...recipe,
    ingredients: Object.keys(recipe.ingredients).map(id => ({
      ...ingredients.find(i => i.id === id),
      id,
      value: recipe.ingredients[id]
    }))
  }))
)

export const recipeSelector = createSelector(
  recipesSelector,
  recipeIdSelector,
  (recipes, id) => recipes.find(recipe => recipe.id === id)
)
