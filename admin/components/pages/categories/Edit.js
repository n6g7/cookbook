import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { updateCategory } from '@actions/categories'
import { CategoryForm } from '../../organisms'
import { categorySelector } from '@selectors/categories'

class EditCategory extends PureComponent {
  render () {
    const { category, updateCategory } = this.props

    return <div>
      <Header as='h1' attached='top'>Edit category</Header>
      <Segment attached>
        <CategoryForm
          onSubmit={updateCategory}
          initialValues={category}
        />
      </Segment>
    </div>
  }
}

const mapStateToProps = state => ({
  category: categorySelector(state)
})

const mapDispatchToProps = {
  updateCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
