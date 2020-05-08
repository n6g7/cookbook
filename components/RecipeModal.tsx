import React from "react";
import styled from "styled-components";

import RecipeContent from "./Recipe";
import { Recipe, getCoverPath } from "../data";

const Container = styled.div`
  align-items: center;
  color: ${(p) => p.theme.colors.grey};
  display: flex;
  flex-flow: column nowrap;
  font-family: ${(p) => p.theme.fonts.roboto};
  font-style: normal;
  font-weight: 300;
`;
const Cover = styled.img`
  height: 320px;
  object-fit: cover;
  width: 100%;
`;

interface Props {
  recipe: Recipe;
}

const RecipeModal: React.FC<Props> = ({ recipe }) => {
  if (!recipe) return null;
  return (
    <Container>
      <Cover src={getCoverPath(recipe)} />
      <RecipeContent recipe={recipe} />
    </Container>
  );
};

export default RecipeModal;
