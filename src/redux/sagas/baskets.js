import { fork, takeLatest } from 'redux-saga/effects'

import rsf from '../rsf'

import { types as authTypes } from '@actions/auth'
import { syncBaskets } from '@actions/baskets'

function * syncBasketsSaga ({ user }) {
  yield fork(
    rsf.database.sync,
    `baskets/${user.uid}`,
    syncBaskets
  )
}

export default function * basketsSaga () {
  yield takeLatest(authTypes.SYNC_USER, syncBasketsSaga)
}
