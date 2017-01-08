import React from 'react';

import Recipe from './Recipe';
import '../style/RecipeList.styl';

class RecipeList extends React.PureComponent {
  render() {
    const { recipes } = this.props;

    return <section>
      { recipes.map(recipe =>
        <Recipe
          image={recipe.image}
          name={recipe.name}
        />
      )}
    </section>;
  }
}

RecipeList.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

export default RecipeList;
