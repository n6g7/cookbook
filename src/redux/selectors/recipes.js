import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { recipeIdSelector } from './router'

const rawRecipesSelector = state => state.recipes.list

export const recipesSelector = createSelector(
  rawRecipesSelector,
  objectToArray
)

export const recipeSelector = createSelector(
  rawRecipesSelector,
  recipeIdSelector,
  (recipes, id) => recipes[id]
)
