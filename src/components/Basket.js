import React from 'react';

import Ingredient from './Ingredient';
import { buildBasket } from '../services/basket';
import '../style/Basket.styl';

class Basket extends React.PureComponent {
  render() {
    const { ingredients, recipes } = this.props;
    const basket = buildBasket(recipes, ingredients);

    const elements = [];
    for (let category in basket) {
      const ingredients = basket[category];

      elements.push(<h3 key={`title-${category}`}>{category}</h3>);
      elements.push(<ul key={`cat-${category}`}>
        {ingredients.map((i, index) =>
          <Ingredient
            name={i.name}
            type={i.type}
            quantity={i.quantity}
            key={`ingredient-${index}`}
          />
        )}
      </ul>);
    }

    return <aside>
      <h2>Groceries list</h2>
      { elements.length > 0
        ? elements.map(e => e)
        : <p>Nothing yet...</p>
      }
    </aside>;
  }
}

Basket.propTypes = {
  ingredients: React.PropTypes.array.isRequired,
  recipes: React.PropTypes.array.isRequired,
};

export default Basket;
