import styled from 'styled-components'

import { Bubblify } from './bubble'

export default styled(Bubblify('button'))`
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  justify-content: center;
  margin: ${p => p.theme.spacing}px 0;
  outline: none;
`
