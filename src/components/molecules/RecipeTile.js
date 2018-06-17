import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ImageCard } from '@atoms'

const Container = styled(ImageCard)`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  font-weight: 500;
  justify-content: space-between;
  min-height: ${p => p.theme.spacing.mult(22)}px;
`

const Title = styled.span`
  font-size: ${p => p.theme.spacing.mult(5)}px;
  line-height: ${p => p.theme.spacing.mult(8)}px;
`

const Action = styled.span`
  color: ${p => p.theme.colours.yellow};
  font-size: ${p => p.theme.spacing.mult(4)}px;
`

class RecipeTile extends PureComponent {
  static propTypes = {
    action: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    action: 'Edit'
  }

  render () {
    const { action, image, title, ...rest } = this.props

    return <Container image={image} {...rest}>
      <Title>{ title }</Title>
      <Action>{ action }</Action>
    </Container>
  }
}

export default RecipeTile
