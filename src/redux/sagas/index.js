import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'

export default function * rootSaga () {
  yield [
    categories(),
    ingredients(),
    recipes()
  ]
}
