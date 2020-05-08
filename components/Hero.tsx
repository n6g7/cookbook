import styled from "styled-components";

const Container = styled.header`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  padding: 100px 0;
`;
const TagLine = styled.p`
  font-family: ${(p) => p.theme.fonts.petit};
  font-size: 18px;
  line-height: 22px;
  margin: 21px 0 0;
`;

const Hero: React.FC = () => {
  return (
    <Container>
      <img src="/logo.svg" alt="Simone" />
      <TagLine>A modern french family cookbook</TagLine>
    </Container>
  );
};

export default Hero;
