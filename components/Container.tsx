import styled from "styled-components";

export default styled.main`
  align-items: center;
  color: ${(p) => p.theme.colors.grey};
  display: flex;
  flex-flow: column nowrap;
  font-family: ${(p) => p.theme.fonts.roboto};
  font-weight: 300;
  margin: auto;
  max-width: ${(p) => p.theme.pageWidth}px;
`;
