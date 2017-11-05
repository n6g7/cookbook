import { types } from '@actions/baskets'

const initialState = {
  list: {}
}

export default function basketsReducer (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_BASKETS:
      return {
        ...state,
        list: action.baskets
      }
    default:
      return state
  }
}
