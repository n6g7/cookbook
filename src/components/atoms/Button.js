import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@theme'
import Suffix from './Suffix'
import SVG from './SVG'
import bubble from './bubble'

const StyledButton = styled.button`
  ${bubble}
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  justify-content: center;
  outline: none;
`

const Icon = styled(SVG)`
  margin-right: ${p => p.theme.spacing}px;
`

class Button extends PureComponent {
  static propTypes = {
    colour: PropTypes.oneOf(Object.keys(theme.colours)),
    children: PropTypes.string,
    icon: PropTypes.string,
    suffix: PropTypes.string
  }

  static defaultProps = {
    colour: theme.defaultColour
  }

  render () {
    const { children, icon, suffix, ...props } = this.props

    return <StyledButton {...props}>
      { icon && <Icon icon={icon} colour={props.colour} /> }
      { children && children }
      { suffix && <Suffix>{ suffix }</Suffix> }
    </StyledButton>
  }
}

export default Button
