import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
        <Table.Cell selectable>
          <Link to={`${match.url}/${category.id}`}>{ category.name }</Link>
        </Table.Cell>
      </Table.Row>
    )}
  </Table.Body>

  <Table.Footer>
    <Table.Row>
      <Table.HeaderCell>
        <Button
          as={Link}
          to={`${match.url}/create`}
          floated='right'
          icon
          labelPosition='left'
          primary
        >
          <Icon name='add circle' /> Add Category
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
</Table>

const mapStateToProps = state => ({
  categories: categoriesSelector(state)
})

export default connect(mapStateToProps)(CategoriesList)
