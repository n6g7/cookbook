import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { updateUnit } from '@actions/units'
import { UnitForm } from '../../organisms'
import { unitSelector } from '@selectors/units'

class EditUnit extends PureComponent {
  render () {
    const { unit, updateUnit } = this.props

    return <div>
      <Header as='h1' attached='top'>Edit unit</Header>
      <Segment attached>
        <UnitForm
          onSubmit={updateUnit}
          initialValues={unit}
        />
      </Segment>
    </div>
  }
}

const mapStateToProps = state => ({
  unit: unitSelector(state)
})

const mapDispatchToProps = {
  updateUnit
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUnit)
