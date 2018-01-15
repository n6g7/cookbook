import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'

import save from '@assets/save.svg'
import { FieldList, Input, Link } from '@atoms'
import { ingredientsSelector } from '@selectors'

const StyledInput = styled(Input)`
  margin-right: ${p => p.theme.spacing}px;
  width: 76px;
`

class AddRecipeIngredientsForm extends PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired
  }

  capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

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
              component={StyledInput}
              type='number'
              colour='yellow'
              suffix={ingredient.unit}
            />
            {this.capitalize(ingredient.name)}
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
