import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { rawRecipesSelector } from './recipes'

export const rawBasketsSelector = state => state.baskets.list

export const basketsSelector = createSelector(
  rawBasketsSelector,
  rawRecipesSelector,
  (rawBaskets, rawRecipes) => objectToArray(rawBaskets).map(basket => ({
    ...basket,
    recipes: Object.keys(basket.recipes).map(id => ({
      ...rawRecipes[id],
      id,
      value: basket.recipes[id]
    }))
  }))
)
