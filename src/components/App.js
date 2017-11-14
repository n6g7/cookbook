import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  Home,
  Login,
  Recipes
} from '@pages'

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
      { !loggedIn &&
        <Switch>
          <Route exact path='/' component={Login} />
          <Redirect to='/' />
        </Switch>
      }
      { loggedIn &&
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/recipes' component={Recipes} />
        </Switch>
      }
    </Container>
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(App)
