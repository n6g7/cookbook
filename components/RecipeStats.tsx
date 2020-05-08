import React from "react";
import styled from "styled-components";
import { Recipe, Duration } from "../data";

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
  src: `/icons/${p.type}.svg`,
  alt: p.type,
}))`
  margin-right: 4px;
  &:not(:first-child) {
    margin-left: 8px;
  }
`;
interface StatProps {
  type: "bowl" | "oven";
  duration: Duration;
}
const timeMap: Record<Duration, string> = {
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

interface Props {
  recipe: Recipe;
}

const RecipeStats: React.FC<Props> = ({ recipe }) => {
  return (
    <Stats>
      <Stat type="bowl" duration={recipe.props["Preparation time (min)"]} />
      <Stat type="oven" duration={recipe.props["Cooking time (min)"]} />
    </Stats>
  );
};

export default RecipeStats;
