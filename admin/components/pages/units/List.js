import React from 'react'
import { connect } from 'react-redux'

import { Table } from '../../molecules'
import { unitsSelector } from '@selectors'

const UnitHeader = ({ HeaderCell, Row }) => <Row>
  <HeaderCell>Name</HeaderCell>
  <HeaderCell>Symbol</HeaderCell>
</Row>

const UnitRow = ({ Cell, item, Row }) => <Row>
  <Cell>{ item.name }</Cell>
  <Cell>{ item.symbol }</Cell>
</Row>

const UnitsList = ({ units }) => <Table
  header={UnitHeader}
  items={units}
  component={UnitRow}
/>

const mapStateToProps = state => ({
  units: unitsSelector(state)
})

export default connect(mapStateToProps)(UnitsList)
