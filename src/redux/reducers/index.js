import { combineReducers } from 'redux'

import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default combineReducers({
  categories,
  ingredients,
  recipes,
  units
})
