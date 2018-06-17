import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import defaultTheme from '@theme'

const withTheme = (theme = defaultTheme) => (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>

injectGlobal`
  body {
    background: white;
    color: #1E2125;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }
`

export default withTheme
