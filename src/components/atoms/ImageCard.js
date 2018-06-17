import styled from 'styled-components'

export default styled.article`
  background: rgba(30,33,37,0.56);
  border-radius: ${p => p.theme.spacing.unit}px;
  color: ${p => p.theme.colours.white};
  padding: ${p => `${p.theme.spacing.mult(3)}px ${p.theme.spacing.mult(6)}px`};
  position: relative;

  &::before {
    background-image: url(${p => p.image});
    background-position: 50% 50%;
    background-size: cover;
    border-radius: ${p => p.theme.spacing.unit}px;
    content: '';
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`
