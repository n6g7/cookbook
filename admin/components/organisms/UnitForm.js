import React, { PureComponent } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

class UnitForm extends PureComponent {
  render () {
    const { handleSubmit } = this.props

    return <Form onSubmit={handleSubmit}>
      <Field
        name='name'
        component={Form.Input}
        label='Name'
      />

      <Field
        name='symbol'
        component={Form.Input}
        label='Symbol'
      />

      <Button type='submit' primary>Save</Button>
    </Form>
  }
}

export default reduxForm({
  form: 'unit'
})(UnitForm)
