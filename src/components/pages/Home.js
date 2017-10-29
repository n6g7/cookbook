import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Basket, RecipeList } from '@organisms'

import {
  ingredientsSelector,
  recipesSelector
} from '@selectors'

class Home extends PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired
  }

  render () {
    const { ingredients, recipes } = this.props

    return <main>
      <Basket ingredients={ingredients} recipes={recipes} />
      <RecipeList recipes={recipes} />
    </main>
  }
}

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state),
  recipes: recipesSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
