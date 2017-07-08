import { call, put, take } from 'redux-saga/effects'
import rsf from '../rsf'

import { syncRecipes } from '@actions/recipes'

function * syncRecipesSaga () {
  const channel = yield call(rsf.database.channel, 'recipes')

  while (true) {
    const { value: recipes } = yield take(channel)
    yield put(syncRecipes(recipes))
  }
}

export default function * recipeSaga () {
  yield [
    syncRecipesSaga()
  ]
}
