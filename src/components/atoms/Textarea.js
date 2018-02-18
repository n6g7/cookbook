import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@theme'
import { Bubblify } from './bubble'

const Container = styled(Bubblify('div'))`
  display: flex;
`

const StyledTextarea = styled.textarea`
  border: none;
  flex-grow: 1;
  font-family: inherit;
  font-size: inherit;
  height: ${p => 12 * p.theme.spacing}px;
  min-width: 0;
  outline: none;
`

class Textarea extends PureComponent {
  static propTypes = {
    colour: PropTypes.oneOf(Object.keys(theme.colours))
  }

  static defaultProps = {
    colour: theme.defaultColour
  }

  render () {
    const {
      className,
      colour,
      input,
      ...props
    } = this.props

    return <Container className={className} colour={colour}>
      <StyledTextarea {...input} {...props} />
    </Container>
  }
}

export default Textarea
