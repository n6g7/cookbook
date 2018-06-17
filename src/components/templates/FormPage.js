import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ImageHeader } from '@molecules'

class FormPage extends PureComponent {
  static propTypes = {
    ...ImageHeader.propTypes,
    buttons: ImageHeader.propTypes.children,
    children: PropTypes.any.isRequired
  }

  render () {
    const { buttons, children, ...header } = this.props

    return <main>
      <ImageHeader {...header}>
        { buttons }
      </ImageHeader>
      { children }
    </main>
  }
}

export default FormPage
