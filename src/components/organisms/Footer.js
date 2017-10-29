import React, { PureComponent } from 'react'
import styled from 'styled-components'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Button } from '@atoms'
import { homepage, version } from '../../../package.json'

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

const Link = styled.a`
  color: ${p => p.theme.text.faded};
  text-align: center;
`

class Footer extends PureComponent {
  render () {
    return <Container>
      <ButtonRow>
        <Button icon={basket} />
        <Button icon={hat} colour='blue' />
      </ButtonRow>

      <Link href={homepage} target='blank'>
        v{ version }
      </Link>
    </Container>
  }
}

export default Footer
