import { createSelector } from 'reselect'
import { objectToArray } from './base'

export const rawBasketsSelector = state => state.baskets.list

export const basketsSelector = createSelector(
  rawBasketsSelector,
  objectToArray
)
