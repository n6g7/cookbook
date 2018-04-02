import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Header, Segment } from 'semantic-ui-react'

import { updateUnit } from '@actions/units'
import { UnitForm } from '../../organisms'
import { unitSelector } from '@selectors/units'

class EditUnit extends PureComponent {
  render () {
    const { match, unit, updateUnit } = this.props

    const initialValues = {
      ...unit,
      id: match.params.id
    }

    return <div>
      <Header as='h1' attached='top'>Edit unit</Header>
      <Segment attached>
        <UnitForm
          onSubmit={updateUnit}
          initialValues={initialValues}
        />
      </Segment>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  unit: unitSelector(state, ownProps)
})

const mapDispatchToProps = {
  updateUnit
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUnit)
