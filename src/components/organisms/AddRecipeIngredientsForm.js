import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import save from '@assets/save.svg'
import { FieldList, Input, Link } from '@atoms'
import { ingredientsSelector } from '@selectors'
import capitalize from '@services/capitalize'

class AddRecipeIngredientsForm extends PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired
  }

  render () {
    const {
      handleSubmit,
      ingredients
    } = this.props

    return <form onSubmit={handleSubmit}>
      <FieldList>
        {ingredients.map(ingredient =>
          <li key={ingredient.id}>
            <Field
              name={`ingredients.${ingredient.id}`}
              component={Input}
              type='number'
              colour='yellow'
              suffix={ingredient.unit}
            />
            {capitalize(ingredient.name)}
          </li>
        )}
      </FieldList>

      <Link to='/recipes/create' icon={save} colour='blue'>Add ingredients to the recipe</Link>
    </form>
  }
}

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state)
})

export default connect(mapStateToProps)(
  reduxForm({
    form: 'createRecipe',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(AddRecipeIngredientsForm)
)
