import React from 'react'

import '../style/Ingredient.styl'

class Ingredient extends React.PureComponent {
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

Ingredient.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  quantity: React.PropTypes.number.isRequired
}

export default Ingredient
