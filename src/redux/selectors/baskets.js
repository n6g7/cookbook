import { createSelector } from 'reselect'

import sumIngredients from '@services/basket'

import { objectToArray } from './base'
import { rawIngredientsSelector } from './ingredients'
import { rawRecipesSelector } from './recipes'

export const rawBasketsSelector = state => state.baskets.list
export const basketIdSelector = (state, props) => props.match.params.id

export const basketsSelector = createSelector(
  rawBasketsSelector,
  rawRecipesSelector,
  (baskets, recipes) => objectToArray(baskets).map(basket => ({
    ...basket,
    recipes: Object.keys(basket.recipes).map(rid => ({
      ...recipes[rid],
      count: basket.recipes[rid]
    }))
  }))
)

export const basketSelector = createSelector(
  basketsSelector,
  basketIdSelector,
  rawIngredientsSelector,
  (baskets, id, ingredients) => {
    const basket = sumIngredients(baskets.find(basket => basket.id === id))

    return {
      ...basket,
      ingredients: Object.keys(basket.ingredients).map(iid => ({
        ...ingredients[iid],
        id: iid,
        value: basket.ingredients[iid]
      }))
    }
  }
)
