import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Page from './Page'

const Title = styled.h1`
  align-items: flex-end;
  display: flex;
  flex-flow: row nowrap;
  font-size: 32px;
  font-weight: normal;
  height: ${p => 30 * p.theme.spacing}px;
  margin: 0 0 ${p => 2 * p.theme.spacing}px;
`

class BlankPage extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    const { children, title } = this.props

    return <Page>
      <Title>{ title }</Title>
      { children }
    </Page>
  }
}

export default BlankPage
