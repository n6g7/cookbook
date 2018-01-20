export const types = {
  SYNC_CATEGORIES: 'SYNC_CATEGORIES',
  CREATE_CATEGORY: {
    REQUEST: 'CREATE_CATEGORY.REQUEST',
    SUCCESS: 'CREATE_CATEGORY.SUCCESS',
    FAILURE: 'CREATE_CATEGORY.FAILURE'
  },
  UPDATE_CATEGORY: {
    REQUEST: 'UPDATE_CATEGORY.REQUEST',
    SUCCESS: 'UPDATE_CATEGORY.SUCCESS',
    FAILURE: 'UPDATE_CATEGORY.FAILURE'
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

export const updateCategory = ({ id, ...category }) => ({
  type: types.UPDATE_CATEGORY.REQUEST,
  category
})

export const updateCategorySuccess = () => ({
  type: types.UPDATE_CATEGORY.SUCCESS
})

export const updateCategoryFailure = error => ({
  type: types.UPDATE_CATEGORY.FAILURE,
  error
})
