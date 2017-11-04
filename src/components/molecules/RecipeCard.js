import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import basket from '@assets/basket.svg'
import { Button, Card, HealthScoreLabel } from '@atoms'

class RecipeCard extends PureComponent {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  }

  render () {
    const {
      calories,
      healthScore,
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
      <Button icon={basket} />
    </Card>
  }
}

export default RecipeCard
