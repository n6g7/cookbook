import styled from "styled-components";
import RecipeCard from "./RecipeCard";

export default styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & > * {
    margin-bottom: 12px;
  }
`;
