import { all, fork } from 'redux-saga/effects'
import { saga as auth } from 'rsf-auth'
import rsf, { authProvider } from '../rsf'

import baskets from './baskets'
import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default function * rootSaga () {
  yield all([
    fork(auth, rsf, authProvider),
    fork(baskets),
    fork(categories),
    fork(ingredients),
    fork(recipes),
    fork(units)
  ])
}
