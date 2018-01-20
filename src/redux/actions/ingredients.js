export const types = {
  SYNC_INGREDIENTS: 'SYNC_INGREDIENTS',
  CREATE_INGREDIENT: {
    REQUEST: 'CREATE_INGREDIENT.REQUEST',
    SUCCESS: 'CREATE_INGREDIENT.SUCCESS',
    FAILURE: 'CREATE_INGREDIENT.FAILURE'
  },
  UPDATE_INGREDIENT: {
    REQUEST: 'UPDATE_INGREDIENT.REQUEST',
    SUCCESS: 'UPDATE_INGREDIENT.SUCCESS',
    FAILURE: 'UPDATE_INGREDIENT.FAILURE'
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

export const updateIngredient = ({ id, ...ingredient }) => ({
  type: types.UPDATE_INGREDIENT.REQUEST,
  ingredient
})

export const updateIngredientSuccess = () => ({
  type: types.UPDATE_INGREDIENT.SUCCESS
})

export const updateIngredientFailure = error => ({
  type: types.UPDATE_INGREDIENT.FAILURE,
  error
})
