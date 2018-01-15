import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { createBasket } from '@actions/baskets'
import { AddBasketForm } from '@organisms'
import { BlankPage } from '@templates'

class AddBasket extends PureComponent {
  render () {
    const { createBasket } = this.props

    return <BlankPage title='Let’s create a new basket together!'>
      <AddBasketForm onSubmit={createBasket} />
    </BlankPage>
  }
}

const mapDispatchToProps = {
  createBasket
}

export default connect(null, mapDispatchToProps)(AddBasket)
