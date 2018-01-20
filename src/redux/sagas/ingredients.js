import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createIngredientSuccess,
  createIngredientFailure,
  syncIngredients,
  types
} from '@actions/ingredients'

function * createIngredientSaga ({ ingredient }) {
  try {
    yield call(rsf.database.create, 'ingredients', ingredient)
    yield put(createIngredientSuccess())
    yield put(push('/ingredients'))
  } catch (error) {
    yield put(createIngredientFailure(error))
  }
}

export default function * ingredientsSaga () {
  yield fork(
    rsf.database.sync,
    'ingredients',
    {
      successActionCreator: syncIngredients
    }
  )
  yield takeEvery(types.CREATE_INGREDIENT.REQUEST, createIngredientSaga)
}
