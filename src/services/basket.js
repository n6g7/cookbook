import _mapValues from 'lodash/mapValues'
import _mergeWith from 'lodash/mergeWith'

const mergeIngredients = (...lists) => _mergeWith(
  {},
  ...lists,
  (a, b) => (a || 0) + (b || 0)
)

export default basket => {
  const ingredientLists = basket.recipes.map(recipe => _mapValues(
    recipe.ingredients,
    n => recipe.count * n
  ))

  return {
    ...basket,
    ingredients: mergeIngredients(...ingredientLists)
  }
}
