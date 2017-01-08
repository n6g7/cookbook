import React from 'react';

import Counter from './Counter';

import servings from '../images/icon-servings.svg';
import vegetarian from '../images/icon-vegetarian.svg';
import cheesefree from '../images/icon-cheesefree.svg';

class Recipe extends React.PureComponent {
  render() {
    const { image, name } = this.props;

    return <article>
      <header>
        <img src={image} />
      </header>
      <h3>{ name }</h3>
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

Recipe.propTypes = {
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Recipe;
