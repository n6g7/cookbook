import { call, fork, put, takeEvery } from 'redux-saga/effects'

import rsf from '../rsf'

import {
  createRecipeSuccess,
  createRecipeFailure,
  syncRecipes,
  types
} from '@actions/recipes'

function * createRecipeSaga ({ recipe }) {
  try {
    yield call(rsf.database.create, 'recipes', recipe)
    yield put(createRecipeSuccess())
  } catch (error) {
    yield put(createRecipeFailure(error))
  }
}

export default function * recipesSaga () {
  yield fork(rsf.database.sync, 'recipes', syncRecipes)

  yield takeEvery(types.CREATE_RECIPE.REQUEST, createRecipeSaga)
}
