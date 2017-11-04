import React, { PureComponent } from 'react'
import styled from 'styled-components'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Button, Link } from '@atoms'

const Container = styled.footer`
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${p => 20 * p.theme.spacing}px;
`

const ButtonRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-bottom: ${p => 2 * p.theme.spacing}px;

  button {
    margin: 0 ${p => 1.5 * p.theme.spacing}px;
  }
`

class Footer extends PureComponent {
  render () {
    return <Container>
      <ButtonRow>
        <Button icon={basket} />
        <Link to='/recipes/create' icon={hat} colour='blue' />
      </ButtonRow>
    </Container>
  }
}

export default Footer
