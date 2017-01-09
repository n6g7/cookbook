const getQuantities = recipes =>
  recipes.reduce((acc, r) => {
    return r.ingredients.reduce((acc, i) => {
      if (!acc[i.name]) acc[i.name] = 0;

      acc[i.name] += i.quantity * r.servings;
      return acc;
    }, acc);
  }, {});

const attachQuantities = (ingredients, quantities) =>
  ingredients
    .filter(i => quantities[i.name])
    .map(i => ({
      ...i,
      quantity: quantities[i.name]
    }));

const categorize = basket =>
  basket.reduce((acc, i) => {
    if (!(i.category in acc)) acc[i.category] = [];
    acc[i.category].push(i);
    return acc;
  }, {});

export const buildBasket = (recipes, ingredients) => {
  const quantities = getQuantities(recipes);
  const basket = attachQuantities(ingredients, quantities);

  return categorize(basket);
};
