import { createSelector } from 'reselect'
import { objectToArray } from './base'

export const rawUnitsSelector = state => state.units.list

export const unitsSelector = createSelector(
  rawUnitsSelector,
  objectToArray
)
