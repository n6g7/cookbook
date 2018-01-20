import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'

import penpaper from '@assets/penpaper.svg'
import plus from '@assets/plus.svg'
import save from '@assets/save.svg'
import {
  Button,
  Ingredient,
  IngredientsList,
  Input,
  Label,
  Link,
  Radio
} from '@atoms'
import { ImageSelector } from '@molecules'
import { formIngredientsSelector } from '@selectors'

const ButtonRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  button {
    margin-right: ${p => p.theme.spacing}px;
  }
`

class AddRecipeForm extends PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired
  }

  render () {
    const {
      handleSubmit,
      ingredients
    } = this.props

    return <form onSubmit={handleSubmit}>
      <Label>How would you like to name it?</Label>
      <Field name='name' component={Input} type='text' colour='blue' placeholder='Name of the recipe' />

      <Label>How many servings?</Label>
      <Field name='serves' component={Input} type='number' colour='blue' placeholder='Number of servings' />

      <Label>What are the ingredients?</Label>
      { ingredients.length > 0 &&
        [
          <IngredientsList key='list'>
            { ingredients.map(ingredient =>
              <Ingredient
                key={ingredient.id}
                name={ingredient.name}
                quantity={ingredient.value}
                unit={ingredient.unit.symbol}
              />
            )}
          </IngredientsList>,
          <Link
            to='/recipes/create/ingredients'
            icon={penpaper}
            colour='blue'
            key='edit'
          >
            Edit ingredients
          </Link>
        ]
      }
      { ingredients.length === 0 &&
        <Link to='/recipes/create/ingredients' icon={plus} colour='blue'>Add ingredients</Link>
      }

      <Label>What does it look like?</Label>
      <Field
        name='image'
        component={ImageSelector}
        colour='blue'
      />

      <Label>Is it healthy?</Label>
      <ButtonRow>
        <Field
          name='healthScore'
          component={Radio}
          radioValue='1'
          children='Healthy'
          activeColour='green'
        />
        <Field
          name='healthScore'
          component={Radio}
          radioValue='2'
          children='Balanced'
          activeColour='orange'
        />
        <Field
          name='healthScore'
          component={Radio}
          radioValue='3'
          children='Unhealthy'
          activeColour='red'
        />
      </ButtonRow>

      <Label>How many calories in a serving?</Label>
      <Field
        name='calories'
        component={Input}
        type='number'
        colour='blue'
        placeholder='0'
        suffix='cals'
      />

      <Label>How long does it take to cook?</Label>
      <Field
        name='preparationTime'
        component={Input}
        type='number'
        colour='blue'
        placeholder='0'
        suffix='minutes'
      />

      <Label>All good?</Label>
      <Button icon={save} colour='blue' type='submit'>Yes, save the recipe</Button>
    </form>
  }
}

const mapStateToProps = state => ({
  ingredients: formIngredientsSelector(state)
})

export default connect(mapStateToProps)(
  reduxForm({
    form: 'createRecipe',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(AddRecipeForm)
)
