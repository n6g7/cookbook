import styled, { css } from 'styled-components'

const backgroundColour = ({ theme, ...props }) =>
  props.primary ? theme.colours.yellow
    : props.secondary ? theme.colours.teal
      : props.danger ? theme.colours.red
        : props.valid ? theme.colours.green
          : theme.colours.teal

export default styled.button`
  ${p => p.theme.shadow}
  background: ${backgroundColour};
  border: none;
  border-radius: ${p => p.theme.spacing.mult(1)}px;
  color: ${p => p.theme.colours.white};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: ${p => p.theme.spacing.mult(6)}px;
  outline: none;
  padding: ${p => p.theme.spacing.mult(4)}px;
  transition: .1s;

  ${p => p.large && css`
    width: 100%;
  `}

  &:active {
    ${p => p.theme.shadowActive};
    transform: translateY(2px);
  }
`
