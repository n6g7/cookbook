import categories from './categories'
import recipes from './recipes'

export default function * rootSaga () {
  yield [
    categories(),
    recipes()
  ]
}
