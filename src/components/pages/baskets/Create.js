import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { createBasket } from '@actions/baskets'
import { EditBasket } from '@forms'
import { BlankPage } from '@templates'

class AddBasket extends PureComponent {
  render () {
    const { createBasket } = this.props

    return <BlankPage title='Let’s create a new basket together!'>
      <EditBasket onSubmit={createBasket} />
    </BlankPage>
  }
}

const mapDispatchToProps = {
  createBasket
}

export default connect(null, mapDispatchToProps)(AddBasket)
