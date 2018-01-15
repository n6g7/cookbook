import _mapValues from 'lodash/mapValues'

export const types = {
  SYNC_BASKETS: 'SYNC_BASKETS',
  CREATE_BASKET: {
    REQUEST: 'CREATE_BASKET.REQUEST',
    SUCCESS: 'CREATE_BASKET.SUCCESS',
    FAILURE: 'CREATE_BASKET.FAILURE'
  }
}

export const syncBaskets = baskets => ({
  type: types.SYNC_BASKETS,
  baskets
})

export const createBasket = (basket) => ({
  type: types.CREATE_BASKET.REQUEST,
  basket: {
    ...basket,
    recipes: _mapValues(basket.recipes, parseInt)
  }
})

export const createBasketSuccess = () => ({
  type: types.CREATE_BASKET.SUCCESS
})

export const createBasketFailure = error => ({
  type: types.CREATE_BASKET.FAILURE,
  error
})
