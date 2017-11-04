import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import theme from '@theme'
import Suffix from './Suffix'
import SVG from './SVG'

export const bubble = css`
  align-items: center;
  background: white;
  border: 1px solid ${p => p.theme.colours[p.colour]};
  border-radius: ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px 0;
  box-shadow: ${p => p.theme.spacing / 4}px ${p => p.theme.spacing / 4}px 0 ${p => p.theme.shadow};
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  min-height: ${p => 6 * p.theme.spacing}px;
  padding: 0 ${p => 2 * p.theme.spacing}px;
`

const Icon = styled(SVG)`
  margin-right: ${p => p.margin ? p.theme.spacing : 0}px;
`

export const Bubblify = Component => {
  const BubblifiedComponent = styled(Component)`
    ${bubble}
  `

  return class Bubblified extends PureComponent {
    static propTypes = {
      colour: PropTypes.oneOf(Object.keys(theme.colours)),
      children: PropTypes.node,
      icon: PropTypes.string,
      suffix: PropTypes.string
    }

    static defaultProps = {
      colour: theme.defaultColour
    }

    render () {
      const { children, icon, suffix, ...props } = this.props

      return <BubblifiedComponent {...props}>
        { icon && <Icon icon={icon} colour={props.colour} margin={!!children} /> }
        { children && children }
        { suffix && <Suffix>{ suffix }</Suffix> }
      </BubblifiedComponent>
    }
  }
}
