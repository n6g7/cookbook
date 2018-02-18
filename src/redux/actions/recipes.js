import _mapValues from 'lodash/mapValues'

export const types = {
  SYNC_RECIPES: 'SYNC_RECIPES',
  CREATE_RECIPE: {
    REQUEST: 'CREATE_RECIPE.REQUEST',
    SUCCESS: 'CREATE_RECIPE.SUCCESS',
    FAILURE: 'CREATE_RECIPE.FAILURE'
  },
  UPDATE_RECIPE: {
    REQUEST: 'UPDATE_RECIPE.REQUEST',
    SUCCESS: 'UPDATE_RECIPE.SUCCESS',
    FAILURE: 'UPDATE_RECIPE.FAILURE'
  }
}

export const syncRecipes = recipes => ({
  type: types.SYNC_RECIPES,
  recipes
})

export const createRecipe = ({ image, ...recipe }) => ({
  type: types.CREATE_RECIPE.REQUEST,
  recipe: {
    ...recipe,
    calories: parseInt(recipe.calories),
    healthScore: parseInt(recipe.healthScore),
    ingredients: _mapValues(recipe.ingredients, parseFloat),
    preparationTime: parseInt(recipe.preparationTime),
    serves: parseInt(recipe.serves)
  },
  image
})

export const createRecipeSuccess = () => ({
  type: types.CREATE_RECIPE.SUCCESS
})

export const createRecipeFailure = error => ({
  type: types.CREATE_RECIPE.FAILURE,
  error
})

export const updateRecipe = ({ image, ...recipe }) => ({
  type: types.UPDATE_RECIPE.REQUEST,
  recipe: {
    ...recipe,
    calories: parseInt(recipe.calories),
    healthScore: parseInt(recipe.healthScore),
    ingredients: _mapValues(recipe.ingredients, parseFloat),
    preparationTime: parseInt(recipe.preparationTime),
    serves: parseInt(recipe.serves)
  },
  image
})

export const updateRecipeSuccess = () => ({
  type: types.UPDATE_RECIPE.SUCCESS
})

export const updateRecipeFailure = error => ({
  type: types.UPDATE_RECIPE.FAILURE,
  error
})
