import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  height: 94px;
  margin-top: 160px;
  width: 100%;

  a {
    color: inherit;
  }
`;
const Section = styled.section`
  align-items: center;
  color: ${(p) => p.theme.colors.lightGrey};
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  font-size: 12px;
  line-height: 14px;
  list-style: none;
  margin: 0;
  padding: 0;

  li:not(:first-child) {
    margin-left: 16px;
  }
`;
const Left = styled(Section)`
  justify-content: flex-start;
`;
const Right = styled(Section)`
  justify-content: flex-end;
`;

const Menu: React.FC = () => {
  return (
    <Container>
      <Left>
        Made with love by&nbsp;
        <a href="https://charlottebretonsch.com">Charlotte</a>&nbsp;and&nbsp;
        <a href="https://gnab.fr">Nathan</a>
      </Left>
      <Right>Simone Cookbook 2020</Right>
    </Container>
  );
};

export default Menu;
