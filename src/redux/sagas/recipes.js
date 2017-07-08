import rsf from '../rsf'

import { syncRecipes } from '@actions/recipes'

export default function * recipeSaga () {
  yield [
    rsf.database.sync('recipes', syncRecipes)
  ]
}
