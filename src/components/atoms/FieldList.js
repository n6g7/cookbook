import styled from 'styled-components'

const FieldList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  margin: 0 0 ${p => 4 * p.theme.spacing}px;
  padding: 0;

  li {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: ${p => p.theme.spacing}px;
  }
`

export default FieldList
