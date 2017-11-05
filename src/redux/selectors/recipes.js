import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { rawIngredientsSelector } from './ingredients'
import { recipeIdSelector } from './router'

const rawRecipesSelector = state => state.recipes.list

export const recipesSelector = createSelector(
  rawRecipesSelector,
  objectToArray
)

export const rawRecipeSelector = createSelector(
  rawRecipesSelector,
  recipeIdSelector,
  (recipes, id) => recipes[id]
)

export const recipeSelector = createSelector(
  rawRecipeSelector,
  rawIngredientsSelector,
  (recipe, ingredients) => ({
    ...recipe,
    ingredients: Object.keys(recipe.ingredients).map(id => ({
      ...ingredients[id],
      id,
      value: recipe.ingredients[id]
    }))
  })
)
