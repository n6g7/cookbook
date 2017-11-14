import styled from 'styled-components'

import Button from './Button'
import Link from './Link'

const ButtonList = styled.nav`
  align-items: flex-start;
  display: flex;
  flex-flow: ${p => p.row ? 'row wrap' : 'column nowrap'};
  margin: ${p => 3 * p.theme.spacing}px 0;

  ${Button}, ${Link} {
    margin-bottom: ${p => p.theme.spacing}px;
    margin-right: ${p => p.theme.spacing}px;
    width: auto;
  }
`

export default ButtonList
