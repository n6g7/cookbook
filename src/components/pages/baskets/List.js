import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Basket, Button, ButtonList, Link } from '@atoms'
import { basketsSelector } from '@selectors/baskets'
import { BlankPage } from '@templates'

class BasketList extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    baskets: PropTypes.array.isRequired
  }

  render () {
    const { baskets } = this.props

    return <BlankPage title='Your grocery lists'>
      <ButtonList>
        <Link to='/' colour='blue' icon={hat}>Look at my recipes</Link>
        <Button icon={basket}>Create a new grocery list</Button>
      </ButtonList>

      { baskets.map(basket =>
        <Basket basket={basket} key={basket.id} />
      )}
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  baskets: basketsSelector(state)
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BasketList)
