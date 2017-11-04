import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Button, Link } from '@atoms'
import { BlankPage } from '@templates'

import {
  ingredientsSelector,
  recipesSelector
} from '@selectors'

const ButtonList = styled.nav`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  margin: ${p => 3 * p.theme.spacing}px 0;

  ${Button}, ${Link} {
    margin-bottom: ${p => p.theme.spacing}px;
    width: auto;
  }
`

class Home extends PureComponent {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired
  }

  render () {
    return <BlankPage title='Hello Charlotte, what do you want to do today?'>
      <ButtonList>
        <Link to='/recipes/create' icon={hat} colour='blue'>Add a new recipe</Link>
        <Button icon={basket}>Prepare my groceries</Button>
      </ButtonList>
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  ingredients: ingredientsSelector(state),
  recipes: recipesSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
