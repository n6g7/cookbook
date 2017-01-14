import React from 'react';
import { connect } from 'react-redux';

import Counter from './Counter';
import { setServings } from '../redux/reducers/recipes.actions';
import servingsImage from '../images/icon-servings.svg';
import vegetarianImage from '../images/icon-vegetarian.svg';
import cheesefreeImage from '../images/icon-cheesefree.svg';
import '../style/Recipe.styl';

class Recipe extends React.PureComponent {
  render() {
    const {
      cheesefreeServings,
      image,
      index,
      name,
      servings,
      setServings,
      veggieServings
    } = this.props;

    return <article>
      <header>
        <img src={image} />
      </header>
      <h3>{ name }</h3>
      <div className="counter-row">
        <Counter
          image={servingsImage}
          label="total servings"
          onChange={v => setServings(index, v)}
          value={servings}
        />
      </div>
      <div className="counter-row">
        <Counter
          image={cheesefreeImage}
          max={servings}
          onChange={v => setServings(index, v, 'cheesefreeServings')}
          value={cheesefreeServings}
        />
        <Counter
          image={vegetarianImage}
          max={servings}
          onChange={v => setServings(index, v, 'veggieServings')}
          value={veggieServings}
        />
      </div>
    </article>;
  }
}

Recipe.propTypes = {
  cheesefreeServings: React.PropTypes.number.isRequired,
  image: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  servings: React.PropTypes.number.isRequired,
  setServings: React.PropTypes.func.isRequired,
  veggieServings: React.PropTypes.number.isRequired,
};

Recipe.defaultProps = {
  cheesefreeServings: 0,
  servings: 0,
  veggieServings: 0
};

export default Recipe;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setServings
};

export const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
