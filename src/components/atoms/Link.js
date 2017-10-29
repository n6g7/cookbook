import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Bubblify } from './bubble'

export default styled(Bubblify(Link))`
  color: inherit;
  font-size: inherit;
  text-decoration: none;
`
