import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import Ingredients from './Ingredients'
import Main from './Main'

class AddRecipe extends PureComponent {
  render () {
    const { match } = this.props

    return <Switch>
      <Route exact path={`${match.url}/`} component={Main} />
      <Route exact path={`${match.url}/ingredients`} component={Ingredients} />
    </Switch>
  }
}

export default AddRecipe
