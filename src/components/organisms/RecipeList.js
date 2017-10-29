import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Recipe } from '@molecules'

class RecipeList extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  }

  render () {
    const { recipes } = this.props

    return <section>
      { recipes.map((recipe, index) =>
        <Recipe
          image={recipe.image}
          index={index}
          name={recipe.name}
          servings={recipe.servings}
          cheesefreeServings={recipe.cheesefreeServings}
          veggieServings={recipe.veggieServings}
          key={`recipe-${index}`}
        />
      )}
    </section>
  }
}

export default RecipeList
