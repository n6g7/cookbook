import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@theme'

const Container = styled.span`
  display: flex;

  g,
  path {
    fill: ${p => p.theme.colours[p.colour]};
    stroke: ${p => p.theme.colours[p.colour]};
  }
`

class SVG extends PureComponent {
  static propTypes = {
    colour: PropTypes.oneOf(Object.keys(theme.colours)),
    icon: PropTypes.string.isRequired
  }

  static defaultProps = {
    colour: theme.defaultColour
  }

  render () {
    const { icon, ...props } = this.props

    return <Container
      dangerouslySetInnerHTML={{ __html: icon }}
      {...props}
    />
  }
}

export default SVG
