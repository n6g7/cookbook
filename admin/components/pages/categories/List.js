import React from 'react'
import { connect } from 'react-redux'

import { Table } from '../../molecules'
import { categoriesSelector } from '@selectors'

const CategoryHeader = ({ HeaderCell, Row }) => <Row>
  <HeaderCell>Name</HeaderCell>
</Row>

const CategoryRow = ({ Cell, item, Row }) => <Row>
  <Cell>{ item.name }</Cell>
</Row>

const CategoriesList = ({ categories }) => <Table
  header={CategoryHeader}
  items={categories}
  component={CategoryRow}
/>

const mapStateToProps = state => ({
  categories: categoriesSelector(state)
})

export default connect(mapStateToProps)(CategoriesList)
