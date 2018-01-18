import React from 'react'
import { connect } from 'react-redux'

import { Table } from '../../molecules'
import { ingredientsSelector } from '@selectors'

const IngredientHeader = ({ HeaderCell, Row }) => <Row>
  <HeaderCell>Name</HeaderCell>
  <HeaderCell>Category</HeaderCell>
  <HeaderCell>Unit</HeaderCell>
  <HeaderCell>Cheese</HeaderCell>
  <HeaderCell>Meat</HeaderCell>
</Row>

const IngredientRow = ({ Cell, item, Row }) => <Row>
  <Cell>{ item.name }</Cell>
  <Cell>{ item.category }</Cell>
  <Cell>{ item.unit }</Cell>
  <Cell>{ item.cheese && '🧀' }</Cell>
  <Cell>{ item.meat && '🍗' }</Cell>
</Row>

const IngredientsList = ({ ingredients }) => <Table
  header={IngredientHeader}
  items={ingredients}
  component={IngredientRow}
/>

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state)
})

export default connect(mapStateToProps)(IngredientsList)
