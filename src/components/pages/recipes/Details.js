import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Markdown from 'react-markdown'

import basket from '@assets/basket.svg'
import penpaper from '@assets/penpaper.svg'
import {
  Banner,
  Button,
  ButtonList,
  HealthScoreLabel,
  Ingredient,
  IngredientsList,
  Input,
  Label,
  Link,
  SubLabel
} from '@atoms'
import { recipeSelector } from '@selectors/recipes'
import { BannerPage } from '@templates'

const Title = styled(Label)`
  margin-bottom: ${p => 1.5 * p.theme.spacing}px;
`

const Subtitle = styled.p`
  color: ${p => p.theme.text.faded};
  margin: ${p => 1.5 * p.theme.spacing}px 0 ${p => 3 * p.theme.spacing}px;
`

class RecipeDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    recipe: PropTypes.object.isRequired
  }

  state = {
    servings: 1
  }

  onChange = event => this.setState({
    servings: event.target.value
  })

  render () {
    const {
      match,
      recipe: {
        calories,
        healthScore,
        image,
        ingredients,
        instructions,
        name,
        preparationTime,
        serves
      }
    } = this.props
    const { servings } = this.state

    const banner = <Banner image={image}>
      <HealthScoreLabel healthScore={healthScore} />
    </Banner>

    return <BannerPage banner={banner}>
      <Title>{ name }</Title>
      <Subtitle>{`${calories} kcal  ${preparationTime} min`}</Subtitle>

      <ButtonList row>
        <Button icon={basket}>Add to grocery list</Button>
        <Link to={`${match.url}/edit`} icon={penpaper} colour='grey'>Edit</Link>
      </ButtonList>

      <SubLabel>Ingredients</SubLabel>

      <Input
        onChange={this.onChange}
        value={this.state.servings}
        type='number'
        colour='blue'
        suffix='servings'
      />

      <IngredientsList>
        { ingredients.map(ingredient =>
          <Ingredient
            key={ingredient.id}
            name={ingredient.name}
            quantity={servings * ingredient.value / serves}
            unit={ingredient.unit.symbol}
          />
        )}
      </IngredientsList>

      <SubLabel>Instructions</SubLabel>
      <Markdown source={instructions} />
    </BannerPage>
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipe: recipeSelector(state, ownProps)
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)
