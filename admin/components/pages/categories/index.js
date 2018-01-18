import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './List'

export default ({ match }) => <Switch>
  <Route exact path={`${match.url}`} component={List} />
</Switch>
