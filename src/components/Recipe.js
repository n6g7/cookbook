import React from 'react';

import Counter from './Counter';
import recipe from '../images/recipe.png';

import servings from '../images/icon-servings.png';
import vegetarian from '../images/icon-vegetarian.png';
import cheesefree from '../images/icon-cheesefree.png';

class Recipe extends React.PureComponent {
  render() {
    return <article>
      <header>
        <img src={recipe} />
      </header>
      <h3>Pâtes à la crème au champignons</h3>
      <div className="counter-row">
        <Counter label="total servings" image={servings} />
      </div>
      <div className="counter-row">
        <Counter image={cheesefree} />
        <Counter image={vegetarian} />
      </div>
      <footer>
        <button>Add to list</button>
      </footer>
    </article>;
  }
}

Recipe.propTypes = {};

export default Recipe;
