export const types = {
  SYNC_INGREDIENTS: 'SYNC_INGREDIENTS'
}

export const syncIngredients = ingredients => ({
  type: types.SYNC_INGREDIENTS,
  ingredients
})
