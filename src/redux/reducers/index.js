import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import auth from './auth'
import baskets from './baskets'
import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default combineReducers({
  auth,
  baskets,
  categories,
  form: formReducer,
  ingredients,
  recipes,
  router: routerReducer,
  units
})
