import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default combineReducers({
  categories,
  form: formReducer,
  ingredients,
  recipes,
  units
})
