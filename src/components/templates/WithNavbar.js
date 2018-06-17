import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import basket from '@assets/basket.svg'
import bell from '@assets/bell.svg'
import cutlery from '@assets/cutlery.svg'
import { Navbar } from '@molecules'

const Container = styled.main`
  padding-bottom: ${p => p.theme.spacing.mult(26)}px;
`

const StyledNavbar = styled(Navbar)`
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
`

class WithNavbar extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    const { children } = this.props

    return <Container>
      { children }

      <StyledNavbar>
        <Navbar.Item
          icon={basket}
          title='Back to groceries'
        />
        <Navbar.Item
          icon={cutlery}
          title='Back to recipes'
          active
        />
        <Navbar.Item
          icon={bell}
          title='Back to servings'
        />
      </StyledNavbar>
    </Container>
  }
}

export default WithNavbar
