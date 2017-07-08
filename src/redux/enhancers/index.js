import { compose } from 'redux'
import middlewares from './middlewares'

const customComposer = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default customComposer(
  middlewares
)
