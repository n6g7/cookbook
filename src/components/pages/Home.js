import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import basket from '@assets/basket.svg'
import hat from '@assets/hat.svg'
import { Button, Link } from '@atoms'
import { RecipeCard } from '@molecules'
import { recipesSelector } from '@selectors'
import { BlankPage } from '@templates'

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

const RecipeList = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  margin: ${p => 4 * p.theme.spacing}px 0;

  article {
    margin-bottom: ${p => 2 * p.theme.spacing}px;
  }
`

class Home extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired
  }

  render () {
    const { recipes } = this.props

    return <BlankPage title='Hello Charlotte, what do you want to do today?'>
      <ButtonList>
        <Link to='/recipes/create' icon={hat} colour='blue'>Add a new recipe</Link>
        <Button icon={basket}>Prepare my groceries</Button>
      </ButtonList>

      <RecipeList>
        {recipes.map(recipe =>
          <RecipeCard recipe={recipe} key={recipe.id} />
        )}
      </RecipeList>
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  recipes: recipesSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
