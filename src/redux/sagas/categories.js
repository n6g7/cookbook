import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createCategorySuccess,
  createCategoryFailure,
  syncCategories,
  types
} from '@actions/categories'

function * createCategorySaga ({ category }) {
  try {
    yield call(rsf.database.create, 'categories', category)
    yield put(createCategorySuccess())
    yield put(push('/categories'))
  } catch (error) {
    yield put(createCategoryFailure(error))
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
}
