import React, { PureComponent } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

class CategoryForm extends PureComponent {
  render () {
    const { handleSubmit } = this.props

    return <Form onSubmit={handleSubmit}>
      <Field
        name='name'
        component={Form.Input}
        label='Name'
        placeholder='Name'
      />

      <Button type='submit' primary>Save</Button>
    </Form>
  }
}

export default reduxForm({
  form: 'category'
})(CategoryForm)
