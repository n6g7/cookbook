import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Container from "../components/Container";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { IngredientsContext } from "../contexts/ingredients";
import { getIngredients, getUnits, getRecipeIngredients } from "../data";
import React from "react";

const theme = {
  pageWidth: 1080,
  colors: {
    grey: "#333333",
    lightGrey: "#828282",
    veryLightGrey: "#f2f2f2",
    shadow: "rgba(0, 0, 0, 0.08)",
    red: "#EB5757",
    orange: "#F2994A",
    yellow: "#F2C94C",
  },
  fonts: {
    roboto: "'Roboto', sans-serif",
    petit: "'Petit Formal Script', cursive",
  },
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }
  .ReactModal__Body--open {
    overflow: hidden;
  }
  .ReactModal__Overlay {
    overflow: scroll;
  }
`;

const MyApp = ({ Component, pageProps, ...props }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Simone</title>
      </Head>
      <ThemeProvider theme={theme}>
        <IngredientsContext.Provider
          value={{
            ingredients: props.ingredients,
            units: props.units,
            recipeIngredients: props.recipeIngredients,
          }}
        >
          <GlobalStyle />
          <Container>
            <Menu />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </IngredientsContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  return {
    ...(await App.getInitialProps(appContext)),
    ingredients: await getIngredients(),
    recipeIngredients: await getRecipeIngredients(),
    units: await getUnits(),
  };
};
