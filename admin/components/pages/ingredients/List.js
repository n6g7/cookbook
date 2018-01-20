import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

import { ingredientsSelector } from '@selectors'

const IngredientsList = ({ match, ingredients }) => <Table celled selectable striped>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Category</Table.HeaderCell>
      <Table.HeaderCell>Unit</Table.HeaderCell>
      <Table.HeaderCell>Cheese</Table.HeaderCell>
      <Table.HeaderCell>Meat</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    { ingredients.map(ingredient =>
      <Table.Row key={ingredient.id}>
        <Table.Cell>{ ingredient.name }</Table.Cell>
        <Table.Cell>{ ingredient.category.name }</Table.Cell>
        <Table.Cell>{ ingredient.unit.name }</Table.Cell>
        <Table.Cell>{ ingredient.cheese && '🧀' }</Table.Cell>
        <Table.Cell>{ ingredient.meat && '🍗' }</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
</Table>

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state)
})

export default connect(mapStateToProps)(IngredientsList)
