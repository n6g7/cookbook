import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  AddRecipe,
  Home
} from '@pages'

const Container = styled.div`
  margin: auto;
  max-width: ${p => 53 * p.theme.spacing}px;
`

class App extends PureComponent {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes/create' component={AddRecipe} />
      </Switch>
    </Container>
  }
}

export default App
