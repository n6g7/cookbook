export const types = {
  SYNC_INGREDIENTS: 'SYNC_INGREDIENTS',
  CREATE_INGREDIENT: {
    REQUEST: 'CREATE_INGREDIENT.REQUEST',
    SUCCESS: 'CREATE_INGREDIENT.SUCCESS',
    FAILURE: 'CREATE_INGREDIENT.FAILURE'
  }
}

export const syncIngredients = ingredients => ({
  type: types.SYNC_INGREDIENTS,
  ingredients
})

export const createIngredient = (ingredient) => ({
  type: types.CREATE_INGREDIENT.REQUEST,
  ingredient: {
    cheese: false,
    meat: false,
    ...ingredient
  }
})

export const createIngredientSuccess = () => ({
  type: types.CREATE_INGREDIENT.SUCCESS
})

export const createIngredientFailure = error => ({
  type: types.CREATE_INGREDIENT.FAILURE,
  error
})
