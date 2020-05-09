import styled from "styled-components";

const Container = styled.article`
  width: 468px;
`;

export const Header = styled.header`
  font-family: ${(p) => p.theme.fonts.petit};
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  margin: 20px 0;
`;

export const Signature = styled.p`
  margin-top: 24px;
  text-align: right;

  &::before {
    content: "— ";
  }
`;

Container.Header = Header;
Container.Paragraph = Paragraph;
Container.Signature = Signature;
export default Container;
