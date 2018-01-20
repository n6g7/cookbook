export const types = {
  SYNC_UNITS: 'SYNC_UNITS',
  CREATE_UNIT: {
    REQUEST: 'CREATE_UNIT.REQUEST',
    SUCCESS: 'CREATE_UNIT.SUCCESS',
    FAILURE: 'CREATE_UNIT.FAILURE'
  },
  UPDATE_UNIT: {
    REQUEST: 'UPDATE_UNIT.REQUEST',
    SUCCESS: 'UPDATE_UNIT.SUCCESS',
    FAILURE: 'UPDATE_UNIT.FAILURE'
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

export const updateUnit = ({ id, ...unit }) => ({
  type: types.UPDATE_UNIT.REQUEST,
  unit
})

export const updateUnitSuccess = () => ({
  type: types.UPDATE_UNIT.SUCCESS
})

export const updateUnitFailure = error => ({
  type: types.UPDATE_UNIT.FAILURE,
  error
})
