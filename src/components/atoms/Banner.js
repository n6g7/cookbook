import styled from 'styled-components'

const Banner = styled.header`
  background-image: url(${p => p.image});
  background-size: cover;
  border-radius: ${p => p.theme.spacing / 4}px ${p => p.theme.spacing / 4}px 0 0;
  flex-grow: 1;
  padding: ${p => p.theme.spacing}px;
`

export default Banner
