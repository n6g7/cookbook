import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

import { categoriesSelector } from '@selectors'

const CategoriesList = ({ match, categories }) => <Table celled selectable striped>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    { categories.map(category =>
      <Table.Row key={category.id}>
        <Table.Cell>{ category.name }</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
</Table>

const mapStateToProps = state => ({
  categories: categoriesSelector(state)
})

export default connect(mapStateToProps)(CategoriesList)
