import { createSelector } from 'reselect'
import { objectToArray } from './base'

export const rawCategoriesSelector = state => state.categories.list

export const categoriesSelector = createSelector(
  rawCategoriesSelector,
  objectToArray
)
