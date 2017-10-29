export const types = {
  SYNC_CATEGORIES: 'SYNC_CATEGORIES'
}

export const syncCategories = categories => ({
  type: types.SYNC_CATEGORIES,
  categories
})
