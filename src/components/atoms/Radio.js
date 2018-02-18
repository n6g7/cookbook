import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import theme from '@theme'
import Button from './Button'

class Radio extends PureComponent {
  static propTypes = {
    activeColour: PropTypes.oneOf(Object.keys(theme.colours)),
    inactiveColour: PropTypes.oneOf(Object.keys(theme.colours)),
    radioValue: PropTypes.string.isRequired
  }

  static defaultProps = {
    activeColour: 'green',
    inactiveColour: 'grey'
  }

  onClick = () => this.props.input.onChange(this.props.radioValue)

  render () {
    const {
      activeColour,
      inactiveColour,
      input: { value },
      meta,
      radioValue,
      ...props
    } = this.props

    const active = value === radioValue || value === parseInt(radioValue)

    return <Button
      onClick={this.onClick}
      colour={active ? activeColour : inactiveColour}
      {...props}
    />
  }
}

export default Radio
