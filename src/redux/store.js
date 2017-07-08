import { createStore, compose } from 'redux'

import reducers from './reducers'
import { middlewares } from './enhancers'

import preloadedState from '../../cookbook.yml'

const enhancers = compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default createStore(
  reducers,
  preloadedState,
  enhancers
)
