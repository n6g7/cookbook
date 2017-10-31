import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'

const Input = styled.input`
  display: none;
`

class FileButton extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    onChange: PropTypes.func
  }

  onClick = () => this.input.click()

  render () {
    const {
      children,
      onChange,
      input: {
        value,
        ...input
      },
      ...props
    } = this.props

    return <div>
      <Input
        type='file'
        onChange={onChange}
        innerRef={ref => { this.input = ref }}
        {...input}
      />
      <Button onClick={this.onClick} {...props}>
        { children }
      </Button>
    </div>
  }
}

export default FileButton
