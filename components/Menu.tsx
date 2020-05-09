import styled from "styled-components";
import Link from "next/link";

const Container = styled.nav`
  background: white;
  display: flex;
  flex-flow: row nowrap;
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
const SubMenu = styled.ol`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  font-size: 12px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  li:not(:first-child) {
    margin-left: 16px;
  }
`;
const LeftMenu = styled(SubMenu)`
  justify-content: flex-start;
`;
const RightMenu = styled(SubMenu)`
  justify-content: flex-end;
`;

const Menu: React.FC = () => {
  return (
    <Container>
      <LeftMenu>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/recipes">
            <a>Recipes</a>
          </Link>
        </li>
      </LeftMenu>
      <RightMenu>
        <li>
          <Link href="/groceries">
            <a>Groceries</a>
          </Link>
        </li>
      </RightMenu>
    </Container>
  );
};

export default Menu;
