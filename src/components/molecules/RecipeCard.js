import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import basket from '@assets/basket.svg'
import { HealthScoreLabel, Link } from '@atoms'
import Card from './Card'

class RecipeCard extends PureComponent {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  }

  render () {
    const {
      calories,
      healthScore,
      id,
      image,
      name,
      preparationTime
    } = this.props.recipe

    return <Card
      image={image}
      label={<HealthScoreLabel healthScore={healthScore} />}
      title={name}
      subtitle={`${calories} kcal  ${preparationTime} min`}
    >
      <Link to={`/recipes/${id}`} icon={basket} />
    </Card>
  }
}

export default RecipeCard
