import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { createCategory } from '@actions/categories'
import { CategoryForm } from '../../organisms'

class CreateCategory extends PureComponent {
  render () {
    const { createCategory } = this.props

    return <div>
      <Header as='h1' attached='top'>New category</Header>
      <Segment attached>
        <CategoryForm onSubmit={createCategory} />
      </Segment>
    </div>
  }
}

const mapDispatchToProps = {
  createCategory
}

export default connect(null, mapDispatchToProps)(CreateCategory)
