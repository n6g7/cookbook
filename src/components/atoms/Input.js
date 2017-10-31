import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@theme'
import { Bubblify } from './bubble'

const Container = styled(Bubblify('div'))`
  display: flex;
`

const StyledInput = styled.input`
  border: none;
  flex-grow: 1;
  font-family: inherit;
  font-size: inherit;
  height: ${p => 4 * p.theme.spacing}px;
  min-width: 0;
  outline: none;
`

class Input extends PureComponent {
  static propTypes = {
    colour: PropTypes.oneOf(Object.keys(theme.colours)),
    suffix: PropTypes.string
  }

  static defaultProps = {
    colour: theme.defaultColour
  }

  render () {
    const {
      className,
      colour,
      suffix,
      input,
      ...props
    } = this.props

    return <Container className={className} colour={colour} suffix={suffix}>
      <StyledInput {...input} {...props} />
    </Container>
  }
}

export default Input
