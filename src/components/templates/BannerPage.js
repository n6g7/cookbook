import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Page from './Page'

const BannerArea = styled.div`
  display: flex;
  height: ${p => 26 * p.theme.spacing}px;
  margin: 0 ${p => -3 * p.theme.spacing}px ${p => 4 * p.theme.spacing}px;
`

class BannerPage extends PureComponent {
  static propTypes = {
    banner: PropTypes.node.isRequired
  }

  render () {
    const { banner, children } = this.props

    return <Page>
      <BannerArea>
        { banner }
      </BannerArea>

      { children }
    </Page>
  }
}

export default BannerPage
