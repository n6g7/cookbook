import styled, { css } from 'styled-components'

export default styled.input`
  ${p => p.theme.shadow}
  border: ${p => `${p.theme.spacing.mult(0.5)}px solid ${p.theme.colours.teal}`};
  border-radius: ${p => p.theme.spacing.mult(1)}px;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  padding: ${p => p.theme.spacing.mult(4)}px;
  transition: 0.2s;

  &:focus {
    border-color: ${p => p.theme.colours.green};
  }

  ${p => p.large && css`
    width: 100%;
  `}
`
