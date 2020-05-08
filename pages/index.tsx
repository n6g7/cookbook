import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import styled from "styled-components";

import { getRecipes, Recipe } from "../data";
import Hero from "../components/Hero";
import Separator from "../components/Separator";
import Text from "../components/Text";
import RecipeCard from "../components/RecipeCard";
import RecipeList from "../components/RecipeList";
import RecipeModal from "../components/RecipeModal";

Modal.setAppElement("#__next");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  content: {
    top: "64px",
    bottom: "auto",
    left: "50%",
    width: "800px",
    transform: "translate(-50%, 0)",
    border: "none",
    "box-shadow": "0px 20px 40px rgba(0, 0, 0, 0.16)",
    padding: 0,
  },
};

const Anchor = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

interface Props {
  recipe?: Recipe;
  recipes: Recipe[];
}

const Index: NextPage<Props> = ({ recipe, recipes }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Modal
        isOpen={!!router.query.recipeId}
        onRequestClose={() => router.push("/")}
        contentLabel="Recipe modal"
        style={modalStyles}
      >
        <RecipeModal recipe={recipe} />
      </Modal>
      <Hero />
      <RecipeList>
        {recipes.map((recipe) => (
          <Link href={`/?recipeId=${recipe.id}`} as={`/recipes/${recipe.id}`}>
            <Anchor>
              <RecipeCard recipe={recipe} />
            </Anchor>
          </Link>
        ))}
      </RecipeList>
      <Separator />
      <Text>
        <Text.Header>A modern french family cookbook</Text.Header>
        <Text.Paragraph>
          The heart of my family’s cuisine is love. Love for fresh ingredients.
          Love for mouthwatering odours. Love for simple, delicious, taste.
          <br />
          Simone’s cookbook is a collection of simple recipes that have been
          handed over in my family, for generations, as well as recipes that
          remind me of the flavours of my childhood.
        </Text.Paragraph>
        <Text.Paragraph>
          <strong>Good for you.</strong> With a variety of vegetables and
          fruits.
        </Text.Paragraph>
        <Text.Paragraph>
          <strong>Easy to shop.</strong> Choose what you want to cook, for how
          many people. We’ll create a list for you. We’ll combine ingredients
          accross multiple recipes. It’s good for the environment and good for
          your purse.
        </Text.Paragraph>
        <Text.Paragraph>
          <strong>Simple to cook.</strong> Our recipes are made for today’s busy
          time. They are easy to follow. No chef’s complicated steps.
        </Text.Paragraph>
        <Text.Signature>Simone’s great grand daughter</Text.Signature>
      </Text>
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      recipes: await getRecipes(),
    },
  };
};

export default Index;
