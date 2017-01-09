export const types = {
  SET_SERVINGS: 'SET_SERVINGS'
};

export const setServings = (index, value, servingType='servings') => ({
  type: types.SET_SERVINGS,
  index,
  value,
  servingType
});
