import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

class MyTable extends PureComponent {
  static propTypes = {
    component: PropTypes.func.isRequired,
    header: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  }

  render () {
    const {
      component: Component,
      header: Header,
      items
    } = this.props

    return <Table celled selectable striped>
      <Table.Header>
        <Header HeaderCell={Table.HeaderCell} Row={Table.Row} />
      </Table.Header>

      <Table.Body>
        { items.map(item =>
          <Component
            key={item.id}
            item={item}
            Cell={Table.Cell}
            Row={Table.Row}
          />
        )}
      </Table.Body>
    </Table>
  }
}

export default MyTable
