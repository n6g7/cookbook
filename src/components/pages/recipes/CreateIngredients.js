import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { EditRecipeIngredients } from '@forms'
import { BlankPage } from '@templates'

class AddRecipeIngredients extends PureComponent {
  render () {
    return <BlankPage title='Enter the quantity next to the ingredients you would like to add.'>
      <EditRecipeIngredients />
    </BlankPage>
  }
}

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(AddRecipeIngredients)
