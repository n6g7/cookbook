import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'
import { CheckboxField, DropdownField } from 'react-semantic-redux-form'

import { categoriesSelector, unitsSelector } from '@selectors'

class IngredientForm extends PureComponent {
  render () {
    const {
      categories,
      handleSubmit,
      units
    } = this.props

    const categoryOptions = categories.map(category => ({
      key: category.id,
      value: category.id,
      text: category.name
    }))

    const unitOptions = units.map(unit => ({
      key: unit.id,
      value: unit.id,
      text: unit.name
    }))

    return <Form onSubmit={handleSubmit}>
      <Field
        name='name'
        component={Form.Input}
        label='Name'
        placeholder='Name'
      />

      <Form.Group widths='equal'>
        <Field
          name='category'
          component={DropdownField}
          label='Category'
          selection
          search
          placeholder='Category'
          options={categoryOptions}
          fluid
        />

        <Field
          name='unit'
          component={DropdownField}
          label='Unit'
          selection
          search
          placeholder='Unit'
          options={unitOptions}
          fluid
        />
      </Form.Group>

      <Form.Group inline>
        <Field
          name='meat'
          component={CheckboxField}
          label='Meat 🍗'
        />

        <Field
          name='cheese'
          component={CheckboxField}
          label='Cheese 🧀'
        />
      </Form.Group>

      <Button type='submit' primary>Save</Button>
    </Form>
  }
}

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
  units: unitsSelector(state)
})

export default connect(mapStateToProps)(
  reduxForm({
    form: 'ingredient'
  })(IngredientForm)
)
