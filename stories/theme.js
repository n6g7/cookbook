import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '@theme'

const withTheme = (theme = defaultTheme) => (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>

export default withTheme
