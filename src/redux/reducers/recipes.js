import { types } from '@actions/recipes'

const initialState = {
  list: []
}

export default function recipeReducer (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_RECIPES:
      return {
        ...state,
        list: action.recipes
      }
    default:
      return state
  }
}
