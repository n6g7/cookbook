import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { recipesSelector } from './recipes'
import { basketIdSelector } from './router'

export const rawBasketsSelector = state => state.baskets.list

export const basketsSelector = createSelector(
  rawBasketsSelector,
  recipesSelector,
  (rawBaskets, recipesList) => objectToArray(rawBaskets).map(basket => {
    const recipes = Object.keys(basket.recipes).map(id => ({
      ...recipesList.find(r => r.id === id),
      value: basket.recipes[id]
    }))

    const ingredients = []

    recipes.forEach(recipe => {
      recipe.ingredients.forEach((ingredient, iid) => {
        const ing = ingredients.find(i => i.id === iid)

        if (ing) ing.value += ingredient.value
        else ingredients.push(ingredient)
      })
    })

    return {
      ...basket,
      ingredients,
      recipes
    }
  })
)

export const basketSelector = createSelector(
  basketsSelector,
  basketIdSelector,
  (baskets, id) => baskets.find(basket => basket.id === id)
)
