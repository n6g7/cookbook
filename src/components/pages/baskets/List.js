import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Basket, ButtonList, Link } from '@atoms'
import { basketsSelector } from '@selectors/baskets'
import { BlankPage } from '@templates'

const ItemLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`

class BasketList extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    baskets: PropTypes.array.isRequired
  }

  render () {
    const { baskets, match } = this.props

    return <BlankPage title='Your grocery lists'>
      <ButtonList>
        <Link to='/' colour='blue' icon={hat}>Look at my recipes</Link>
        <Link to={`${match.url}/create`} icon={basket}>Create a new grocery list</Link>
      </ButtonList>

      { baskets.map(basket =>
        <ItemLink to={`${match.url}/${basket.id}`} key={basket.id}>
          <Basket basket={basket} />
        </ItemLink>
      )}
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  baskets: basketsSelector(state)
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BasketList)
