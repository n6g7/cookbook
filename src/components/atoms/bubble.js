import { css } from 'styled-components'

export default css`
  align-items: center;
  background: white;
  border: 1px solid ${p => p.theme.colours[p.colour]};
  border-radius: ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px ${p => 3 * p.theme.spacing}px 0;
  box-shadow: ${p => p.theme.spacing / 4}px ${p => p.theme.spacing / 4}px 0 rgba(51,51,5,0.24);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  min-height: ${p => 6 * p.theme.spacing}px;
  padding: 0 ${p => 2 * p.theme.spacing}px;
`
