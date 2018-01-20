import { call, fork, put, select, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createIngredientSuccess,
  createIngredientFailure,
  syncIngredients,
  types,
  updateIngredientSuccess,
  updateIngredientFailure
} from '@actions/ingredients'
import { ingredientIdSelector } from '@selectors/router'

function * createIngredientSaga ({ ingredient }) {
  try {
    yield call(rsf.database.create, 'ingredients', ingredient)
    yield put(createIngredientSuccess())
    yield put(push('/ingredients'))
  } catch (error) {
    yield put(createIngredientFailure(error))
  }
}

function * updateIngredientSaga ({ ingredient }) {
  const id = yield select(ingredientIdSelector)

  try {
    yield call(rsf.database.update, `ingredients/${id}`, ingredient)
    yield put(updateIngredientSuccess())
    yield put(push('/ingredients'))
  } catch (error) {
    yield put(updateIngredientFailure(error))
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
  yield takeEvery(types.UPDATE_INGREDIENT.REQUEST, updateIngredientSaga)
}
