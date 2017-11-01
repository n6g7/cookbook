import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  AddRecipe,
  Home
} from '@pages'

class App extends PureComponent {
  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return <div id='cookbook'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes/create' component={AddRecipe} />
      </Switch>
    </div>
  }
}

export default App
