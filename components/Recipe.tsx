import React, { useState, useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import { Blocks } from "@notion-cms/react";

import HealthLevel from "./HealthLevel";
import RecipeStats from "./RecipeStats";
import Button from "./Button";
import Field from "./Field";
import { RecipeWithBlocks } from "../data";
import { IngredientsContext } from "../contexts/ingredients";

const Container = styled.article`
  padding: 40px 0 64px;
  width: 672px;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 32px;
  line-height: 37px;
  margin: 8px 0 16px;
`;
const Body = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 40px;
`;
const Ingredients = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 32px;
  width: 184px;
`;
const StyledField = styled(Field)`
  margin-bottom: 8px;
`;
const IngredientsList = styled.table`
  border-spacing: 0 6px;
  font-size: 12px;
  line-height: 14px;
  margin: 16px 0;
  width: 100%;
`;
const Instructions = styled.aside`
  display: flex;
  flex-flow: column nowrap;

  & > *:first-child {
    margin: 0;
  }
`;
const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 16px;
`;

interface Props {
  recipe: RecipeWithBlocks;
}

const RecipeContent: React.FC<Props> = ({ recipe }) => {
  const { ingredients, recipeIngredients, units } = useContext(
    IngredientsContext
  );
  const [servings, setServings] = useState<number>(recipe.props.Serves);
  const onChange = useCallback((e) => setServings(e.target.value), [
    setServings,
  ]);
  const ingredientsData = useMemo(
    () =>
      recipeIngredients
        .filter((ri) => ri.props.Recipe[0] === recipe.id)
        .map((ri) => {
          const ingredient = ingredients.find((i) =>
            ri.props.Ingredient.includes(i.id)
          );
          return {
            ...ri,
            ingredient,
            unit: units.find((u) => u.id === ingredient.props.Unit[0]),
            totalQuantity: (ri.props.Quantity * servings) / recipe.props.Serves,
          };
        }),
    [recipeIngredients, recipe.id, ingredients, units, servings]
  );

  return (
    <Container>
      <HealthLevel level={recipe.props["Health score"]} large />
      <Title>{recipe.props.Name}</Title>
      <RecipeStats recipe={recipe} />
      <Body>
        <Ingredients>
          <SectionTitle>Ingredients</SectionTitle>
          <StyledField
            value={servings}
            suffix="servings"
            type="number"
            onChange={onChange}
          />
          <Button>Add to groceries</Button>
          <IngredientsList>
            {ingredientsData.map((ri) => (
              <tr key={ri.id}>
                <td>
                  {ri.totalQuantity} {ri.unit.props.Symbol}
                </td>
                <td>{ri.ingredient.props.Name}</td>
              </tr>
            ))}
          </IngredientsList>
        </Ingredients>
        <Instructions>
          <SectionTitle>Instructions</SectionTitle>
          <Blocks blocks={recipe.blocks} />
        </Instructions>
      </Body>
    </Container>
  );
};

export default RecipeContent;
