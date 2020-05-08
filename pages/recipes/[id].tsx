import { NextPage } from "next";
import styled from "styled-components";

import { getRecipes, getRecipe, Recipe } from "../../data";
import RecipeContent from "../../components/Recipe";

const Cover = styled.img`
  height: 320px;
  margin-top: 40px;
  object-fit: cover;
  width: 672px;
`;

interface Props {
  recipe: Recipe;
}

const RecipePage: NextPage<Props> = ({ recipe }) => (
  <div>
    {recipe.meta?.cover ? <Cover src={recipe.meta.cover} /> : null}
    <RecipeContent recipe={recipe} />
  </div>
);

export const getStaticPaths = async () => {
  const recipes = await getRecipes();
  return {
    paths: recipes.map(({ id }) => ({ params: { id } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      recipe: await getRecipe(params.id),
      recipes: await getRecipes(),
    },
  };
};

export default RecipePage;
