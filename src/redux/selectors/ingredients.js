import { createSelector } from 'reselect'
import { getFormValues } from 'redux-form'
import { objectToArray } from './base'

export const rawIngredientsSelector = state => state.ingredients.list
const rawFormSelector = getFormValues('createRecipe')

export const ingredientsSelector = createSelector(
  rawIngredientsSelector,
  objectToArray
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
