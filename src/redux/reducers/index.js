import { combineReducers } from 'redux'

import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'

export default combineReducers({
  categories,
  ingredients,
  recipes
})
