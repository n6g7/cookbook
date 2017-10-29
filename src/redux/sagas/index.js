import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default function * rootSaga () {
  yield [
    categories(),
    ingredients(),
    recipes(),
    units()
  ]
}
