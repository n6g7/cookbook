import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Button, Link } from '@atoms'
import { BlankPage } from '@templates'

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
    return <BlankPage title='Hello Charlotte, what do you want to do today?'>
      <Link to='/recipes/create' icon={hat} colour='blue'>Add a new recipe</Link>
      <Button icon={basket}>Prepare my groceries</Button>
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state),
  recipes: recipesSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
