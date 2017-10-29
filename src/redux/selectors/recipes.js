import { createSelector } from 'reselect'
import { objectToArray } from './base'

const rawRecipesSelector = state => state.recipes.list

export const recipesSelector = createSelector(
  rawRecipesSelector,
  objectToArray
)
