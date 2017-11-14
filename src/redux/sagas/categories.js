import { fork } from 'redux-saga/effects'

import rsf from '../rsf'

import { syncCategories } from '@actions/categories'

export default function * categoriesSaga () {
  yield fork(
    rsf.database.sync,
    'categories',
    {
      successActionCreator: syncCategories
    }
  )
}
