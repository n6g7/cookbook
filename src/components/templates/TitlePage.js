import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { BlankHeader } from '@molecules'
import WithNavbar from './WithNavbar'

class TitlePage extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const { children, ...header } = this.props

    return <WithNavbar>
      <BlankHeader {...header} />
      { children }
    </WithNavbar>
  }
}

export default TitlePage
