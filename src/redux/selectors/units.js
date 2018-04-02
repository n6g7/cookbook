import { createSelector } from 'reselect'
import { objectToArray } from './base'

export const rawUnitsSelector = state => state.units.list
export const unitIdSelector = (state, props) => props.match.params.id

export const unitsSelector = createSelector(
  rawUnitsSelector,
  objectToArray
)

export const unitSelector = createSelector(
  unitsSelector,
  unitIdSelector,
  (units, id) => units.find(unit => unit.id === id)
)
