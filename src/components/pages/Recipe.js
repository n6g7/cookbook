import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import basket from '@assets/basket.svg'
import penpaper from '@assets/penpaper.svg'
import { Banner, Button, HealthScoreLabel, Label } from '@atoms'
import { BannerPage } from '@templates'

const Title = styled(Label)`
  margin-bottom: ${p => 1.5 * p.theme.spacing}px;
`

const Subtitle = styled.p`
  color: ${p => p.theme.text.faded};
  margin: ${p => 1.5 * p.theme.spacing}px 0 ${p => 3 * p.theme.spacing}px;
`

const ButtonList = styled.div`
  display: flex;
  flex-flow: row wrap;

  ${Button} {
    margin-right: ${p => p.theme.spacing}px;
  }
`

class Recipe extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
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

    const banner = <Banner image={image}>
      <HealthScoreLabel healthScore={healthScore} />
    </Banner>

    return <BannerPage banner={banner}>
      <Title>{ name }</Title>
      <Subtitle>{`${calories} kcal  ${preparationTime} min`}</Subtitle>

      <ButtonList>
        <Button icon={basket}>Add to grocery list</Button>
        <Button icon={penpaper} colour='grey'>Edit</Button>
      </ButtonList>
    </BannerPage>
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.list[ownProps.match.params.id]
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
