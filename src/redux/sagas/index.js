import auth from './auth'
import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default function * rootSaga () {
  yield [
    auth(),
    categories(),
    ingredients(),
    recipes(),
    units()
  ]
}
