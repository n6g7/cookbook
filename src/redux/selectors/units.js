import { createSelector } from 'reselect'
import { objectToArray } from './base'
import { unitIdSelector } from './router'

export const rawUnitsSelector = state => state.units.list

export const unitsSelector = createSelector(
  rawUnitsSelector,
  objectToArray
)

export const unitSelector = createSelector(
  unitsSelector,
  unitIdSelector,
  (units, id) => units.find(unit => unit.id === id)
)
