import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import Create from './Create'
import CreateIngredients from './CreateIngredients'
import Details from './Details'

class Recipes extends PureComponent {
  render () {
    const { match } = this.props

    return <Switch>
      <Route exact path={`${match.url}/create`} component={Create} />
      <Route exact path={`${match.url}/create/ingredients`} component={CreateIngredients} />
      <Route exact path={`${match.url}/:id`} component={Details} />
    </Switch>
  }
}

export default Recipes
