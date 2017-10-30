import React, { PureComponent } from 'react'
import { reduxForm, Field } from 'redux-form'
import styled from 'styled-components'

import penpaper from '@assets/penpaper.svg'
import save from '@assets/save.svg'
import { Button, Input, Label } from '@atoms'

const ButtonRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  button {
    margin-right: ${p => p.theme.spacing}px;
  }
`

class AddRecipeForm extends PureComponent {
  render () {
    const { handleSubmit } = this.props

    return <form onSubmit={handleSubmit}>
      <Label>How would you like to name it?</Label>
      <Field name='name' component={Input} type='text' colour='blue' />

      <Label>How many servings?</Label>
      <Field name='serves' component={Input} type='number' colour='blue' />

      <Label>What are the ingredients?</Label>
      <Button icon={penpaper} colour='blue'>Edit ingredients</Button>

      <Label>What does it look like?</Label>
      <Button icon={penpaper} colour='blue'>Edit the picture</Button>

      <Label>Is it healthy?</Label>
      <ButtonRow>
        <Button colour='green'>Healthy</Button>
        <Button colour='grey'>Balanced</Button>
        <Button colour='grey'>Unhealthy</Button>
      </ButtonRow>

      <Label>All good?</Label>
      <Button icon={save} colour='blue' type='submit'>Yes, save the recipe</Button>
    </form>
  }
}

export default reduxForm({
  form: 'createRecipe'
})(AddRecipeForm)
