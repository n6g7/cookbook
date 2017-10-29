import React from 'react'
import PropTypes from 'prop-types'

import { RecipeContainer } from './Recipe'
import '../style/RecipeList.styl'

class RecipeList extends React.PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  }

  render () {
    const { recipes } = this.props

    return <section>
      { recipes.map((recipe, index) =>
        <RecipeContainer
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
