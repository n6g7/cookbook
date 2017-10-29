import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '@pages'
import { homepage, version } from '../../package.json'
import '../style/App.styl'

class App extends PureComponent {
  render () {
    return <div id='cookbook'>
      <Switch>
        <Route component={Home} />
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
