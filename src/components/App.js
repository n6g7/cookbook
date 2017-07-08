import React from 'react'
import { connect } from 'react-redux'

import { homepage, version } from '../../package.json'
import Basket from './Basket'
import RecipeList from './RecipeList'
import '../style/App.styl'

class App extends React.PureComponent {
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

App.propTypes = {
  ingredients: React.PropTypes.array.isRequired,
  recipes: React.PropTypes.array.isRequired
}

export default App

const mapStateToProps = ({ ingredients, recipes }) => ({
  ingredients,
  recipes
})

const mapDispatchToProps = {}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
