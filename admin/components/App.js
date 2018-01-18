import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Container, Icon, Menu } from 'semantic-ui-react'

import {
  Categories,
  Home,
  Ingredients,
  Units
} from './pages'

const App = ({ match }) => <Container>
  <Menu pointing>
    <Menu.Item header>🍳📖 Admin</Menu.Item>
    <Menu.Item as={NavLink} exact to={match.url}>Home</Menu.Item>
    <Menu.Item as={NavLink} to={`${match.url}ingredients`}>Ingredients</Menu.Item>
    <Menu.Item as={NavLink} to={`${match.url}categories`}>Categories</Menu.Item>
    <Menu.Item as={NavLink} to={`${match.url}units`}>Units</Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item as='a' href='/'>
        <Icon name='browser' />
        Back to the site
      </Menu.Item>
    </Menu.Menu>
  </Menu>

  <Switch>
    <Route exact path={match.url} component={Home} />
    <Route path={`${match.url}categories`} component={Categories} />
    <Route path={`${match.url}ingredients`} component={Ingredients} />
    <Route path={`${match.url}units`} component={Units} />
  </Switch>
</Container>

export default App
