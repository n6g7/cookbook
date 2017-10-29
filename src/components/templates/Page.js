import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Footer } from '@organisms'

const StyledPage = styled.div`
  padding: 0 ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px;
`

class Page extends PureComponent {
  render () {
    return <StyledPage>
      {this.props.children}
      <Footer />
    </StyledPage>
  }
}

export default Page
