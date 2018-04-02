import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import {
  createUnitSuccess,
  createUnitFailure,
  syncUnits,
  types,
  updateUnitSuccess,
  updateUnitFailure
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

function * updateUnitSaga ({ unit }) {
  try {
    const { id: unitId, ...rest } = unit
    yield call(rsf.database.update, `units/${unitId}`, rest)
    yield put(updateUnitSuccess())
    yield put(push('/units'))
  } catch (error) {
    yield put(updateUnitFailure(error))
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
  yield takeEvery(types.UPDATE_UNIT.REQUEST, updateUnitSaga)
}
