import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { homepage, version } from '../../package.json'
import Basket from './Basket'
import RecipeList from './RecipeList'
import '../style/App.styl'

import {
  ingredientsSelector,
  recipesSelector
} from '@selectors'

class App extends PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired
  }

  render () {
    const { ingredients, recipes } = this.props

    return <div id='cookbook'>
      <main>
        <Basket ingredients={ingredients} recipes={recipes} />
        <RecipeList recipes={recipes} />
      </main>
      <footer>
        <a href={homepage} target='blank'>
          v{ version }
        </a>
      </footer>
    </div>
  }
}

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state),
  recipes: recipesSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
