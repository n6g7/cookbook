import { types } from '@actions/units'

const initialState = {
  list: []
}

export default function unitsReducer (state = initialState, action) {
  switch (action.type) {
    case types.SYNC_RECIPES:
      return {
        ...state,
        list: action.units
      }
    default:
      return state
  }
}
