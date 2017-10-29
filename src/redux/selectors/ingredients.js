import { createSelector } from 'reselect'
import { objectToArray } from './base'

const rawIngredientsSelector = state => state.ingredients.list

export const ingredientsSelector = createSelector(
  rawIngredientsSelector,
  objectToArray
)
