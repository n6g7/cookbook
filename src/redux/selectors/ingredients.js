import { createSelector } from 'reselect'
import { getFormValues } from 'redux-form'
import { objectToArray } from './base'
import { rawCategoriesSelector } from './categories'
import { ingredientIdSelector } from './router'
import { rawUnitsSelector } from './units'

export const rawIngredientsSelector = state => state.ingredients.list
const rawFormSelector = getFormValues('createRecipe')

export const ingredientsSelector = createSelector(
  rawIngredientsSelector,
  rawCategoriesSelector,
  rawUnitsSelector,
  (ingredients, categories, units) => objectToArray(ingredients).map(ing => ({
    ...ing,
    category: {
      ...categories[ing.category],
      id: ing.category
    },
    unit: {
      ...units[ing.unit],
      id: ing.unit
    }
  }))
)

export const formIngredientsSelector = createSelector(
  ingredientsSelector,
  rawFormSelector,
  (allIngredients, formValues) => {
    if (!formValues || !formValues.ingredients) return []

    return allIngredients
      .filter(ingredient => ingredient.id in formValues.ingredients)
      .map(ingredient => ({
        ...ingredient,
        value: formValues.ingredients[ingredient.id]
      }))
  }
)

export const ingredientSelector = createSelector(
  ingredientsSelector,
  ingredientIdSelector,
  (ingredients, id) => ingredients.find(ingredient => ingredient.id === id)
)
