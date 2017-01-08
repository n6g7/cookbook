import React from 'react';

import Counter from './Counter';
import recipe from '../images/recipe.png';

class Recipe extends React.PureComponent {
  render() {
    return <article>
      <header>
        <img src={recipe} />
      </header>
      <h3>Pâtes à la crème au champignons</h3>
      <div className="counter-row">
        <Counter label="total servings" />
      </div>
      <div className="counter-row">
        <Counter />
        <Counter />
      </div>
      <footer>
        <button>Add to list</button>
      </footer>
    </article>;
  }
}

Recipe.propTypes = {};

export default Recipe;
