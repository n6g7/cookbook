export const types = {
  SYNC_RECIPES: 'SYNC_RECIPES'
}

export const syncRecipes = recipes => ({
  type: types.SYNC_RECIPES,
  recipes
})
