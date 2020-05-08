import styled from "styled-components";
import React from "react";
import HealthLevel from "./HealthLevel";
import RecipeStats from "./RecipeStats";
import { Recipe, getCoverPath } from "../data";

interface Props {
  recipe: Recipe;
}

const Container = styled.article`
  align-items: stretch;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 2px 16px ${(p) => p.theme.colors.shadow};
  display: flex;
  flex-flow: row nowrap;
  height: 160px;
  overflow: hidden;
  width: 352px;
`;
const Vignette = styled.img`
  object-fit: cover;
  width: 112px;
`;
const Content = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  padding: 16px 25px 16px 16px;
`;
const Name = styled.p`
  font-size: 20px;
  line-height: 23px;
  flex-grow: 1;
  margin: 0;
`;
const Stats = styled.p`
  align-items: center;
  color: ${(p) => p.theme.colors.lightGrey};
  display: flex;
  flex-flow: row wrap;
  font-size: 12px;
  line-height: 14px;
  margin: 0;
`;
const StatIcon = styled.img.attrs((p) => ({
  src: `icons/${p.type}.svg`,
  alt: p.type,
}))`
  margin-right: 4px;
  &:not(:first-child) {
    margin-left: 8px;
  }
`;
interface StatProps {
  type: "bowl" | "oven";
  duration: "Short (0-15 min)" | "Medium (15-30 min)" | "Long (30+ min)";
}
const timeMap = {
  "Short (0-15 min)": "0-15 min",
  "Medium (15-30 min)": "15-30 min",
  "Long (30+ min)": "30+ min",
};
const Stat: React.FC<StatProps> = ({ type, duration }) => (
  <React.Fragment>
    <StatIcon type={type} />
    {timeMap[duration]}
  </React.Fragment>
);

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Container>
      <Vignette src={getCoverPath(recipe)} />
      <Content>
        <HealthLevel level={recipe.props["Health score"]} />
        <Name>{recipe.props.Name}</Name>
        <RecipeStats recipe={recipe} />
      </Content>
    </Container>
  );
};

export default RecipeCard;
