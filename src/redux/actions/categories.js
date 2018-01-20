export const types = {
  SYNC_CATEGORIES: 'SYNC_CATEGORIES',
  CREATE_CATEGORY: {
    REQUEST: 'CREATE_CATEGORY.REQUEST',
    SUCCESS: 'CREATE_CATEGORY.SUCCESS',
    FAILURE: 'CREATE_CATEGORY.FAILURE'
  }
}

export const syncCategories = categories => ({
  type: types.SYNC_CATEGORIES,
  categories
})

export const createCategory = (category) => ({
  type: types.CREATE_CATEGORY.REQUEST,
  category
})

export const createCategorySuccess = () => ({
  type: types.CREATE_CATEGORY.SUCCESS
})

export const createCategoryFailure = error => ({
  type: types.CREATE_CATEGORY.FAILURE,
  error
})
