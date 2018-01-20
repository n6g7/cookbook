import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

import { unitsSelector } from '@selectors'

const UnitsList = ({ match, units }) => <Table celled selectable striped>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Symbol</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    { units.map(unit =>
      <Table.Row key={unit.id}>
        <Table.Cell>{ unit.name }</Table.Cell>
        <Table.Cell>{ unit.symbol }</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
</Table>

const mapStateToProps = state => ({
  units: unitsSelector(state)
})

export default connect(mapStateToProps)(UnitsList)
