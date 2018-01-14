import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import Details from './Details'
import List from './List'

class Recipes extends PureComponent {
  render () {
    const { match } = this.props

    return <Switch>
      <Route exact path={`${match.url}`} component={List} />
      <Route exact path={`${match.url}/:id`} component={Details} />
    </Switch>
  }
}

export default Recipes
