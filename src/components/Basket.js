import React from 'react';

import Ingredient from './Ingredient';
import '../style/Basket.styl';

class Basket extends React.PureComponent {
  render() {
    return <aside>
      <h2>Groceries list</h2>
      <h3>Vegetables</h3>
      <ul>
        <Ingredient name="Tomatoes" type="u" quantity="2" />
        <Ingredient name="Cucumber" type="u" quantity="1" />
        <Ingredient name="Courgette" type="u" quantity="1" />
      </ul>
      <h3>Carbohydrates</h3>
      <ul>
        <Ingredient name="Rice" type="u" quantity="1" />
        <Ingredient name="Pastas" type="u" quantity="1" />
        <Ingredient name="Potatoes" type="u" quantity="1" />
      </ul>
    </aside>;
  }
}

Basket.propTypes = {};

export default Basket;
