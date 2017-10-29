import React from 'react'
import PropTypes from 'prop-types'

import Ingredient from './Ingredient'
import { buildBasket } from '../services/basket'
import '../style/Basket.styl'

class Basket extends React.PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired
  }

  render () {
    const { ingredients, recipes } = this.props
    const basket = buildBasket(recipes, ingredients)

    const elements = []
    for (let category in basket) {
      const ingredients = basket[category]

      elements.push(<h3 key={`title-${category}`}>{category}</h3>)
      elements.push(<ul key={`cat-${category}`}>
        {ingredients.map((i, index) =>
          <Ingredient
            name={i.name}
            type={i.type}
            quantity={i.quantity}
            key={`ingredient-${index}`}
          />
        )}
      </ul>)
    }

    return <aside>
      <h2>Groceries list</h2>
      { elements.length > 0
        ? elements.map(e => e)
        : <p>Nothing yet...</p>
      }
    </aside>
  }
}

export default Basket
