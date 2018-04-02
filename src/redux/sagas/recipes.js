import { reset } from 'redux-form'
import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createRecipeSuccess,
  createRecipeFailure,
  syncRecipes,
  types,
  updateRecipeSuccess,
  updateRecipeFailure
} from '@actions/recipes'

function * createRecipeSaga ({ image, recipe }) {
  try {
    const recipeId = yield call(rsf.database.create, 'recipes', recipe)
    const uploadTask = yield call(rsf.storage.uploadFile, `recipes/${recipeId}`, image)
    const { downloadURL } = yield uploadTask
    yield call(rsf.database.patch, `recipes/${recipeId}`, {
      image: downloadURL
    })
    yield put(createRecipeSuccess())
    yield put(reset('createRecipe'))
    yield put(push(`/recipes/${recipeId}`))
  } catch (error) {
    yield put(createRecipeFailure(error))
  }
}

function * updateRecipeSaga ({ image, recipe }) {
  try {
    const { id: recipeId, ...rest } = recipe
    yield call(rsf.database.patch, `recipes/${recipeId}`, rest)

    // Maybe update the image?
    if (typeof image !== 'string') {
      const uploadTask = yield call(rsf.storage.uploadFile, `recipes/${recipeId}`, image)
      const { downloadURL } = yield uploadTask
      yield call(rsf.database.patch, `recipes/${recipeId}`, {
        image: downloadURL
      })
    }

    yield put(updateRecipeSuccess())
    yield put(reset('createRecipe'))
    yield put(push(`/recipes/${recipeId}`))
  } catch (error) {
    yield put(updateRecipeFailure(error))
  }
}

export default function * recipesSaga () {
  yield fork(
    rsf.database.sync,
    'recipes',
    {
      successActionCreator: syncRecipes
    }
  )

  yield takeEvery(types.CREATE_RECIPE.REQUEST, createRecipeSaga)
  yield takeEvery(types.UPDATE_RECIPE.REQUEST, updateRecipeSaga)
}
