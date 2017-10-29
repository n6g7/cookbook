import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import '../../style/Ingredient.styl'

class Ingredient extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }

  render () {
    const { name, type, quantity } = this.props

    return <li className='ingredient'>
      <span className='name'>{name}</span>
      <span className='quantity'>
        {quantity}
        <span className='unit'>{type}</span>
      </span>
    </li>
  }
}

export default Ingredient
