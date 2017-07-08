import { types } from './recipes.actions'

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_SERVINGS:
      return state.map((recipe, idx) => {
        if (idx === action.index) {
          return {
            ...recipe,
            [action.servingType]: Math.max(action.value, 0)
          }
        } else return recipe
      })
    default:
      return state
  }
}
