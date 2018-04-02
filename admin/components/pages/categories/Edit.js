import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { updateCategory } from '@actions/categories'
import { CategoryForm } from '../../organisms'
import { categorySelector } from '@selectors/categories'

class EditCategory extends PureComponent {
  render () {
    const { category, match, updateCategory } = this.props

    const initialValues = {
      ...category,
      id: match.params.id
    }

    return <div>
      <Header as='h1' attached='top'>Edit category</Header>
      <Segment attached>
        <CategoryForm
          onSubmit={updateCategory}
          initialValues={initialValues}
        />
      </Segment>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: categorySelector(state, ownProps)
})

const mapDispatchToProps = {
  updateCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
