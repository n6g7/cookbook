import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import save from '@assets/save.svg'
import {
  Button,
  FieldList,
  Input,
  Label
} from '@atoms'
import { recipesSelector } from '@selectors'
import capitalize from '@services/capitalize'

class AddBasketForm extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  }

  render () {
    const {
      handleSubmit,
      recipes
    } = this.props

    return <form onSubmit={handleSubmit}>
      <Label>How would you like to name it?</Label>
      <Field name='name' component={Input} type='text' colour='blue' placeholder='Name of the basket' />

      <Label>What are the recipes?</Label>
      <FieldList>
        {recipes.map(recipe =>
          <li key={recipe.id}>
            <Field
              name={`recipes.${recipe.id}`}
              component={Input}
              type='number'
              />
            {capitalize(recipe.name)}
          </li>
        )}
      </FieldList>

      <Label>All good?</Label>
      <Button icon={save} colour='blue' type='submit'>Yes, save the basket</Button>
    </form>
  }
}

const mapStateToProps = state => ({
  recipes: recipesSelector(state)
})

export default connect(mapStateToProps)(
  reduxForm({
    form: 'createBasket',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(AddBasketForm)
)
