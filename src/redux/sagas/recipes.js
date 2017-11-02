import { reset } from 'redux-form'
import { call, fork, put, takeEvery } from 'redux-saga/effects'

import rsf from '../rsf'

import {
  createRecipeSuccess,
  createRecipeFailure,
  syncRecipes,
  types
} from '@actions/recipes'

function * createRecipeSaga ({ image, recipe }) {
  try {
    const recipeId = yield call(rsf.database.create, 'recipes', recipe)
    const uploadTask = yield call(rsf.storage.uploadFile, `recipes/${recipeId}`, image)
    yield uploadTask
    yield put(createRecipeSuccess())
    yield put(reset('createRecipe'))
  } catch (error) {
    yield put(createRecipeFailure(error))
  }
}

export default function * recipesSaga () {
  yield fork(rsf.database.sync, 'recipes', syncRecipes)

  yield takeEvery(types.CREATE_RECIPE.REQUEST, createRecipeSaga)
}
