import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _mapValues from 'lodash/mapValues'

import penpaper from '@assets/penpaper.svg'
import save from '@assets/save.svg'
import { Button, ButtonList, Ingredient, IngredientsList, SubLabel } from '@atoms'
import { basketSelector } from '@selectors/baskets'
import { BlankPage } from '@templates'

class BasketDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    basket: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      ingredients: _mapValues(props.ingredients, () => false)
    }
  }

  render () {
    const { basket } = this.props
    const { ingredients } = this.state

    return <BlankPage title={basket.name}>
      <ButtonList row>
        <Button icon={penpaper}>Modify grocery list</Button>
        <Button colour='grey' icon={save}>Done</Button>
      </ButtonList>

      <SubLabel>Ingredients</SubLabel>

      <IngredientsList>
        { basket.ingredients.map(ingredient =>
          <Ingredient
            key={ingredient.id}
            name={ingredient.name}
            quantity={ingredient.value}
            unit={ingredient.unit.symbol}
            checkable
            checked={ingredients[ingredient.id]}
            onChange={val => this.setState({
              ingredients: {
                ...this.state.ingredients,
                [ingredient.id]: val
              }
            })}
          />
        )}
      </IngredientsList>
    </BlankPage>
  }
}

const mapStateToProps = state => ({
  basket: basketSelector(state)
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BasketDetails)
