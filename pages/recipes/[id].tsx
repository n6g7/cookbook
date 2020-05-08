import { NextPage } from "next";
import styled from "styled-components";

import {
  getRecipes,
  getRecipe,
  Recipe,
  notion,
  getCoverPath,
} from "../../data";
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
    {recipe.meta?.cover ? <Cover src={getCoverPath(recipe)} /> : null}
    <RecipeContent recipe={recipe} />
  </div>
);

export const getStaticPaths = async () => {
  const recipes = await getRecipes();
  return {
    paths: recipes.map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const path = require("path");
  const recipe = await getRecipe(params.id);

  if (recipe.meta?.cover) {
    const coverPath = getCoverPath(recipe);
    const filePath = path.resolve(process.cwd(), `./public${coverPath}`);
    try {
      await notion.downloadImage(recipe.meta.cover, filePath);
      console.log("Downloaded %o -> %o", recipe.meta.cover, filePath);
    } catch (error) {
      console.log(
        "🤬 Failed to download %o -> %o: %s",
        recipe.meta.cover,
        filePath,
        error.message
      );
    }
  }

  return {
    props: {
      recipe,
      recipes: await getRecipes(),
    },
  };
};

export default RecipePage;
