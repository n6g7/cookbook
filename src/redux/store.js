import { createStore } from 'redux'

import enhancers from './enhancers'
import { sagaMiddleware } from './enhancers/middlewares'
import reducers from './reducers'
import rootSaga from './sagas'

import preloadedState from '../../cookbook.yml'

const store = createStore(
  reducers,
  preloadedState,
  enhancers
)

sagaMiddleware.run(rootSaga)

export default store
