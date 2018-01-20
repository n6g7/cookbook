import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createUnitSuccess,
  createUnitFailure,
  syncUnits,
  types
} from '@actions/units'

function * createUnitSaga ({ unit }) {
  try {
    yield call(rsf.database.create, 'units', unit)
    yield put(createUnitSuccess())
    yield put(push('/units'))
  } catch (error) {
    yield put(createUnitFailure(error))
  }
}

export default function * unitsSaga () {
  yield fork(
    rsf.database.sync,
    'units',
    {
      successActionCreator: syncUnits
    }
  )
  yield takeEvery(types.CREATE_UNIT.REQUEST, createUnitSaga)
}
