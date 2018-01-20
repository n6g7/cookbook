export const types = {
  SYNC_UNITS: 'SYNC_UNITS',
  CREATE_UNIT: {
    REQUEST: 'CREATE_UNIT.REQUEST',
    SUCCESS: 'CREATE_UNIT.SUCCESS',
    FAILURE: 'CREATE_UNIT.FAILURE'
  }
}

export const syncUnits = units => ({
  type: types.SYNC_UNITS,
  units
})

export const createUnit = (unit) => ({
  type: types.CREATE_UNIT.REQUEST,
  unit
})

export const createUnitSuccess = () => ({
  type: types.CREATE_UNIT.SUCCESS
})

export const createUnitFailure = error => ({
  type: types.CREATE_UNIT.FAILURE,
  error
})
