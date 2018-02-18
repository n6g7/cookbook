import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { createRecipe } from '@actions/recipes'
import { EditRecipe } from '@forms'
import { BlankPage } from '@templates'

class AddRecipe extends PureComponent {
  render () {
    const { createRecipe } = this.props

    return <BlankPage title='Let’s create a new recipe together!'>
      <EditRecipe onSubmit={createRecipe} />
    </BlankPage>
  }
}

const mapDispatchToProps = {
  createRecipe
}

export default connect(null, mapDispatchToProps)(AddRecipe)
