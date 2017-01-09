const isMeat = (ingredient, ingredients) =>
  ingredients.find(i => i.name === ingredient).meat;

const isCheese = (ingredient, ingredients) =>
  ingredients.find(i => i.name === ingredient).cheese;

const getQuantities = (recipes, ingredients) =>
  recipes.reduce((acc, r) => {
    return r.ingredients.reduce((acc, i) => {
      if (!acc[i.name]) acc[i.name] = 0;

      acc[i.name] += i.quantity * r.servings;

      if (r.veggieServings > 0 && isMeat(i.name, ingredients)) {
        acc[i.name] -= i.quantity * r.veggieServings;
      }
      if (r.cheesefreeServings > 0 && isCheese(i.name, ingredients)) {
        acc[i.name] -= i.quantity * r.cheesefreeServings;
      }

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
  const quantities = getQuantities(recipes, ingredients);
  const basket = attachQuantities(ingredients, quantities);

  return categorize(basket);
};
