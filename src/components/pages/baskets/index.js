import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './List'

class Recipes extends PureComponent {
  render () {
    const { match } = this.props

    return <Switch>
      <Route exact path={`${match.url}`} component={List} />
    </Switch>
  }
}

export default Recipes
