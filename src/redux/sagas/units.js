import { fork } from 'redux-saga/effects'

import rsf from '../rsf'

import { syncUnits } from '@actions/units'

export default function * unitsSaga () {
  yield fork(rsf.database.sync, 'units', syncUnits)
}
