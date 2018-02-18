import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateRecipe } from '@actions/recipes'
import { EditRecipe as EditRecipeForm } from '@forms'
import { rawRecipeSelector } from '@selectors/recipes'
import { BlankPage } from '@templates'

class EditRecipe extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    recipe: PropTypes.object.isRequired,
    updateRecipe: PropTypes.func.isRequired
  }

  render () {
    const { recipe, updateRecipe } = this.props

    return <BlankPage title={`Editing "${recipe.name}"`}>
      <EditRecipeForm
        onSubmit={updateRecipe}
        initialValues={recipe}
      />
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  recipe: rawRecipeSelector(state)
})
const mapDispatchToProps = {
  updateRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe)
