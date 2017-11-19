import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.article`
  background: ${p => p.archived ? p.theme.background : 'white'};
  border: 1px solid ${p => p.theme.border};
  border-radius: ${p => p.theme.spacing / 4}px;
  box-shadow: ${p => p.theme.spacing / 4}px ${p => p.theme.spacing / 4}px 0 ${p => p.theme.shadow};
  padding: ${p => 2 * p.theme.spacing}px;
`

const Title = styled.p`
  margin: 0 0 ${p => p.theme.spacing / 2}px;
`

const Count = styled.p`
  color: ${p => p.theme.text.faded};
  font-size: 12px;
  margin: ${p => p.theme.spacing / 2}px 0 ${p => 2 * p.theme.spacing}px;
`

const RecipeList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0 0 -${p => p.theme.spacing}px;
  padding: 0;

  li {
    margin: 0 0 ${p => p.theme.spacing}px;
    padding: 0;
  }
`

const Recipe = styled.img`
  border-radius: ${p => p.theme.spacing / 4}px;
  height: ${p => 7 * p.theme.spacing}px;
  object-fit: cover;
  width: ${p => 12 * p.theme.spacing}px;
`

class Basket extends PureComponent {
  static propTypes = {
    basket: PropTypes.object.isRequired
  }

  render () {
    const { archived, name, recipes } = this.props.basket

    return <Container archived={archived}>
      <Title>{ name }</Title>
      <Count>{ recipes.length } recipes</Count>

      <RecipeList>
        {recipes.map(recipe =>
          <li key={recipe.id}><Recipe src={recipe.image} /></li>
        )}
      </RecipeList>
    </Container>
  }
}

export default Basket
