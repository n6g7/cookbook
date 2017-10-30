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
  recipe
})

export const createRecipeSuccess = () => ({
  type: types.CREATE_RECIPE.SUCCESS
})

export const createRecipeFailure = error => ({
  type: types.CREATE_RECIPE.FAILURE,
  error
})
