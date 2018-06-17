import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ImageCard } from '@atoms'

const Container = styled(ImageCard)`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  height: ${p => p.theme.spacing.mult(55)}px;
  padding: ${p => `${p.theme.spacing.mult(8)}px ${p.theme.spacing.mult(6)}px`};
`

const Title = styled.span`
  font-size: ${p => p.theme.spacing.mult(6)}px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: ${p => p.theme.spacing.unit}px;
  text-align: center;
`

class RecipeCard extends PureComponent {
  static propTypes = {
    adjective: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    minutes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }

  render () {
    const { adjective, calories, image, minutes, name, ...rest } = this.props

    return <Container image={image} {...rest}>
      <Title>{name}</Title>
      <span>{calories} kcal • {minutes} mins • {adjective}</span>
    </Container>
  }
}

export default RecipeCard
