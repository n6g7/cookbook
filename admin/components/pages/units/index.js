import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Create from './Create'
import Edit from './Edit'
import List from './List'

export default ({ match }) => <Switch>
  <Route exact path={`${match.url}`} component={List} />
  <Route exact path={`${match.url}/create`} component={Create} />
  <Route exact path={`${match.url}/:id`} component={Edit} />
</Switch>
