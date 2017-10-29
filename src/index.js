import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './components/App'
import store from './redux/store'
import theme from './theme'

injectGlobal`
  body {
    background: #f1f1f3;
    color: #333335;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
