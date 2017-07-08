import recipes from './recipes'

export default function * rootSaga () {
  yield [
    recipes()
  ]
}
