import { call, fork, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { reset } from 'redux-form'
import { push } from 'react-router-redux'

import rsf from '../rsf'

import { types as authTypes } from '@actions/auth'
import {
  createBasketSuccess,
  createBasketFailure,
  syncBaskets,
  types
} from '@actions/baskets'

function * syncBasketsSaga ({ user }) {
  if (!user) return

  yield fork(
    rsf.database.sync,
    `baskets/${user.uid}`,
    {
      successActionCreator: syncBaskets
    }
  )
}

function * createBasketSaga ({ basket }) {
  const uid = yield select(state => state.auth.user.uid)

  try {
    yield call(rsf.database.create, `baskets/${uid}`, basket)
    yield put(createBasketSuccess())
    yield put(reset('createBasket'))
    yield put(push('/baskets'))
  } catch (error) {
    yield put(createBasketFailure(error))
  }
}

export default function * basketsSaga () {
  yield takeLatest(authTypes.SYNC_USER, syncBasketsSaga)
  yield takeEvery(types.CREATE_BASKET.REQUEST, createBasketSaga)
}
