import React from 'react';

import Ingredient from './Ingredient';
import '../style/Basket.styl';

class Basket extends React.PureComponent {
  render() {
    const { ingredients } = this.props;

    const categories = ingredients.reduce((acc, ing) => {
      if (!(ing.category in acc)) acc[ing.category] = [];
      acc[ing.category].push(ing);
      return acc;
    }, {});

    const elements = [];

    for (let category in categories) {
      const ingredients = categories[category];

      elements.push(<h3>{category}</h3>);
      elements.push(<ul>
        {ingredients.map(i =>
          <Ingredient name={i.name} type={i.type} quantity="2" />
        )}
      </ul>);
    }

    return <aside>
      <h2>Groceries list</h2>
      {elements.map(e => e)}
    </aside>;
  }
}

Basket.propTypes = {
  ingredients: React.PropTypes.array.isRequired
};

export default Basket;
