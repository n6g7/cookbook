import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  AddRecipe,
  Home
} from '@pages'
import { homepage, version } from '../../package.json'

class App extends PureComponent {
  render () {
    return <div id='cookbook'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recipes/create' component={AddRecipe} />
      </Switch>
      <footer>
        <a href={homepage} target='blank'>
          v{ version }
        </a>
      </footer>
    </div>
  }
}

export default App
