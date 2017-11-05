export const types = {
  SYNC_BASKETS: 'SYNC_BASKETS'
}

export const syncBaskets = baskets => ({
  type: types.SYNC_BASKETS,
  baskets
})
