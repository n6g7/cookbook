import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ImageHeader } from '@molecules'
import WithNavbar from './WithNavbar'

class DetailPage extends PureComponent {
  static propTypes = {
    ...ImageHeader.propTypes,
    buttons: ImageHeader.propTypes.children,
    children: PropTypes.any.isRequired
  }

  render () {
    const { buttons, children, ...header } = this.props

    return <WithNavbar>
      <ImageHeader {...header}>
        { buttons }
      </ImageHeader>
      { children }
    </WithNavbar>
  }
}

export default DetailPage
