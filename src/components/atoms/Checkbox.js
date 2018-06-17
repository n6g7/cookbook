import styled from 'styled-components'

import tick from '@assets/tick.svg'

export default styled.input.attrs({
  type: 'checkbox'
})`
  appearance: none;
  background-image: url(${tick});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border: ${p => p.theme.spacing.mult(0.5)}px solid ${p => p.theme.colours.teal};
  border-radius: ${p => p.theme.spacing.unit}px;
  cursor: pointer;
  height: ${p => p.theme.spacing.mult(6)}px;
  margin: 0;
  outline: none;
  transition: background-color .3s;
  width: ${p => p.theme.spacing.mult(6)}px;

  &:checked {
    background-color: ${p => p.theme.colours.teal};
  }
`
