import auth from './auth'
import baskets from './baskets'
import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'
import units from './units'

export default function * rootSaga () {
  yield [
    auth(),
    baskets(),
    categories(),
    ingredients(),
    recipes(),
    units()
  ]
}
