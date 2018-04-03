import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  Baskets,
  Home,
  Login,
  Recipes
} from '@pages'
import { loggedInSelector } from '@selectors'

const Container = styled.div`
  margin: auto;
  max-width: ${p => 53 * p.theme.spacing}px;
`

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    const { loggedIn } = this.props

    return <Container>
      { !loggedIn && <Login /> }
      { loggedIn &&
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/baskets' component={Baskets} />
          <Route path='/recipes' component={Recipes} />
        </Switch>
      }
    </Container>
  }
}

const mapStateToProps = state => ({
  loggedIn: loggedInSelector(state)
})

export default connect(mapStateToProps)(App)
