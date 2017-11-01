import _mapValues from 'lodash/mapValues'

export const types = {
  SYNC_RECIPES: 'SYNC_RECIPES',
  CREATE_RECIPE: {
    REQUEST: 'CREATE_RECIPE.REQUEST',
    SUCCESS: 'CREATE_RECIPE.SUCCESS',
    FAILURE: 'CREATE_RECIPE.FAILURE'
  }
}

export const syncRecipes = recipes => ({
  type: types.SYNC_RECIPES,
  recipes
})

export const createRecipe = recipe => ({
  type: types.CREATE_RECIPE.REQUEST,
  recipe: {
    ...recipe,
    calories: parseInt(recipe.calories),
    healthScore: parseInt(recipe.healthScore),
    ingredients: _mapValues(recipe.ingredients, parseFloat),
    preparationTime: parseInt(recipe.preparationTime),
    serves: parseInt(recipe.serves)
  }
})

export const createRecipeSuccess = () => ({
  type: types.CREATE_RECIPE.SUCCESS
})

export const createRecipeFailure = error => ({
  type: types.CREATE_RECIPE.FAILURE,
  error
})
