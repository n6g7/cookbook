import { call, fork, put, select, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createCategorySuccess,
  createCategoryFailure,
  syncCategories,
  types,
  updateCategorySuccess,
  updateCategoryFailure
} from '@actions/categories'
import { categoryIdSelector } from '@selectors/router'

function * createCategorySaga ({ category }) {
  try {
    yield call(rsf.database.create, 'categories', category)
    yield put(createCategorySuccess())
    yield put(push('/categories'))
  } catch (error) {
    yield put(createCategoryFailure(error))
  }
}

function * updateCategorySaga ({ category }) {
  const id = yield select(categoryIdSelector)

  try {
    yield call(rsf.database.update, `categories/${id}`, category)
    yield put(updateCategorySuccess())
    yield put(push('/categories'))
  } catch (error) {
    yield put(updateCategoryFailure(error))
  }
}

export default function * categoriesSaga () {
  yield fork(
    rsf.database.sync,
    'categories',
    {
      successActionCreator: syncCategories
    }
  )
  yield takeEvery(types.CREATE_CATEGORY.REQUEST, createCategorySaga)
  yield takeEvery(types.UPDATE_CATEGORY.REQUEST, updateCategorySaga)
}
