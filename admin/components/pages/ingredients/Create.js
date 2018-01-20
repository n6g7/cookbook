import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { createIngredient } from '@actions/ingredients'
import { IngredientForm } from '../../organisms'

class CreateIngredient extends PureComponent {
  render () {
    const { createIngredient } = this.props

    return <div>
      <Header as='h1' attached='top'>New ingredient</Header>
      <Segment attached>
        <IngredientForm onSubmit={createIngredient} />
      </Segment>
    </div>
  }
}

const mapDispatchToProps = {
  createIngredient
}

export default connect(null, mapDispatchToProps)(CreateIngredient)
