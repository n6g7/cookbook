import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { createRecipe } from '@actions/recipes'
import { AddRecipeForm } from '@organisms'
import { BlankPage } from '@templates'

class AddRecipe extends PureComponent {
  render () {
    const { createRecipe } = this.props

    return <BlankPage title='Let’s create a new recipe together!'>
      <AddRecipeForm onSubmit={createRecipe} />
    </BlankPage>
  }
}

const mapDispatchToProps = {
  createRecipe
}

export default connect(null, mapDispatchToProps)(AddRecipe)
