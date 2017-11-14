import { fork } from 'redux-saga/effects'

import rsf from '../rsf'

import { syncIngredients } from '@actions/ingredients'

export default function * ingredientsSaga () {
  yield fork(
    rsf.database.sync,
    'ingredients',
    {
      successActionCreator: syncIngredients
    }
  )
}
