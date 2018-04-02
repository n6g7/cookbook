import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { updateIngredient } from '@actions/ingredients'
import { IngredientForm } from '../../organisms'
import { ingredientSelector } from '@selectors/ingredients'

class EditIngredient extends PureComponent {
  render () {
    const { ingredient, match, updateIngredient } = this.props

    const initial = ingredient
      ? {
        ...ingredient,
        id: match.params.id,
        category: ingredient.category.id,
        unit: ingredient.unit.id
      }
      : {
        id: match.params.id
      }

    return <div>
      <Header as='h1' attached='top'>Edit ingredient</Header>
      <Segment attached>
        <IngredientForm
          onSubmit={updateIngredient}
          initialValues={initial}
        />
      </Segment>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  ingredient: ingredientSelector(state, ownProps)
})

const mapDispatchToProps = {
  updateIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIngredient)
