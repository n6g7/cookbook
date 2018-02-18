import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import penpaper from '@assets/penpaper.svg'
import plus from '@assets/plus.svg'
import { FileButton } from '@atoms'

const Image = styled.img`
  height: ${p => 18 * p.theme.spacing}px;
  margin-bottom: ${p => 3 * p.theme.spacing}px;
  object-fit: cover;
  width: 100%;
`

class ImageSelector extends PureComponent {
  static propTypes = {
    editLabel: PropTypes.string.isRequired,
    emptyLabel: PropTypes.string.isRequired
  }

  static defaultProps = {
    editLabel: 'Edit the picture',
    emptyLabel: 'Add a picture'
  }

  componentDidUpdate () {
    const { value } = this.props.input
    if (value) window.URL.revokeObjectURL(value)
  }

  render () {
    const {
      editLabel,
      emptyLabel,
      input: {
        onChange,
        value
      },
      meta: {
        initial
      },
      ...props
    } = this.props

    const val = value || initial || ''
    const src = typeof val === 'string' ? val : window.URL.createObjectURL(val)

    return <div>
      { value &&
        <Image src={src} />
      }
      <FileButton
        icon={value ? penpaper : plus}
        onChange={onChange} {...props}
        input={{
          accept: 'image/*'
        }}
      >
        { value ? editLabel : emptyLabel }
      </FileButton>
    </div>
  }
}

export default ImageSelector
