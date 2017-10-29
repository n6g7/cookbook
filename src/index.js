import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './components/App'
import store from './redux/store'
import theme from './theme'

injectGlobal`
  body {
    color: #333335;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
