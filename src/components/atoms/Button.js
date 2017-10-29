import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@theme'
import SVG from './SVG'

const StyledButton = styled.button`
  align-items: center;
  background: white;
  border: 1px solid ${p => p.theme.colours[p.colour]};
  border-radius: ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px 0;
  box-shadow: ${p => p.theme.spacing / 4}px ${p => p.theme.spacing / 4}px 0 rgba(51,51,5,0.24);
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  font-size: inherit;
  justify-content: center;
  height: ${p => 6 * p.theme.spacing}px;
  outline: none;
  padding: 0 ${p => 2 * p.theme.spacing}px;
`

const Icon = styled(SVG)`
  margin-right: ${p => p.theme.spacing}px;
`

const Suffix = styled.span`
  color: ${p => p.theme.text.faded};
  margin-left: ${p => p.theme.spacing}px;
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
