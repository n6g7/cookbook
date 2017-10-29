import { fork } from 'redux-saga/effects'

import rsf from '../rsf'

import { syncRecipes } from '@actions/recipes'

export default function * recipesSaga () {
  yield fork(rsf.database.sync, 'recipes', syncRecipes)
}
