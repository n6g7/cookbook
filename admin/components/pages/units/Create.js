import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { createUnit } from '@actions/units'
import { UnitForm } from '../../organisms'

class CreateUnit extends PureComponent {
  render () {
    const { createUnit } = this.props

    return <div>
      <Header as='h1' attached='top'>New unit</Header>
      <Segment attached>
        <UnitForm onSubmit={createUnit} />
      </Segment>
    </div>
  }
}

const mapDispatchToProps = {
  createUnit
}

export default connect(null, mapDispatchToProps)(CreateUnit)
