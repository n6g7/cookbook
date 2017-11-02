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
    multi: PropTypes.bool.isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    multi: false
  }

  onClick = () => this.input.click()
  onChange = event => {
    const { multi, input: { onChange } } = this.props

    if (multi) onChange(event.target.files)
    else onChange(event.target.files[0])
  }

  render () {
    const {
      children,
      input: {
        value,
        ...input
      },
      ...props
    } = this.props

    return <div>
      <Input
        type='file'
        innerRef={ref => { this.input = ref }}
        {...input}
        onChange={this.onChange}
      />
      <Button onClick={this.onClick} {...props}>
        { children }
      </Button>
    </div>
  }
}

export default FileButton
