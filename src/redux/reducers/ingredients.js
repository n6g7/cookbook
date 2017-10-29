import { types } from '@actions/ingredients'

const initialState = {
  list: {}
}

export default function ingredientsReducer (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_INGREDIENTS:
      return {
        ...state,
        list: action.ingredients
      }
    default:
      return state
  }
}
