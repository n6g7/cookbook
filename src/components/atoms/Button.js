import styled from 'styled-components'

import { Bubblify } from './bubble'

export default styled(Bubblify('button')).attrs({
  type: 'button'
})`
  color: inherit;
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: inherit;
  justify-content: center;
  margin: 0;
  outline: none;
`
