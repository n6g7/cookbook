import { createSelector } from 'reselect'
import { objectToArray } from './base'

export const rawCategoriesSelector = state => state.categories.list
export const categoryIdSelector = (state, props) => props.match.params.id

export const categoriesSelector = createSelector(
  rawCategoriesSelector,
  objectToArray
)

export const categorySelector = createSelector(
  categoriesSelector,
  categoryIdSelector,
  (categories, id) => categories.find(category => category.id === id)
)
