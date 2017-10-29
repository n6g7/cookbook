import { types } from '@actions/categories'

const initialState = {
  list: {}
}

export default function categoriesReducer (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_CATEGORIES:
      return {
        ...state,
        list: action.categories
      }
    default:
      return state
  }
}
