import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { categoryIdSelector } from './router'

export const rawCategoriesSelector = state => state.categories.list

export const categoriesSelector = createSelector(
  rawCategoriesSelector,
  objectToArray
)

export const categorySelector = createSelector(
  categoriesSelector,
  categoryIdSelector,
  (categories, id) => categories.find(category => category.id === id)
)
