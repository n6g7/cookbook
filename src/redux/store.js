import { createStore } from 'redux'

import enhancers from './enhancers'
import { sagaMiddleware } from './enhancers/middlewares'
import reducers from './reducers'
import rootSaga from './sagas'

const store = createStore(
  reducers,
  enhancers
)

sagaMiddleware.run(rootSaga)

export default store
