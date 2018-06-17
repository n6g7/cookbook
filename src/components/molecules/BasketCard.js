import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ImageIcon } from '@atoms'

const Container = styled.article`
  ${p => p.theme.shadow}
  align-items: center;
  border-radius: ${p => p.theme.spacing.unit}px
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  padding: ${p => `${p.theme.spacing.mult(8)}px ${p.theme.spacing.mult(6)}px ${p.theme.spacing.mult(10)}px`};
`

const Title = styled.span`
  font-size: ${p => p.theme.spacing.mult(6)}px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: ${p => p.theme.spacing.unit}px;
`

const Subtitle = styled.span`
`

const IconList = styled.ol`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: ${p => p.theme.spacing.mult(4)}px 0 0;
  padding: 0;

  li:not(:first-child) {
    margin-left: ${p => p.theme.spacing.mult(2)}px;
  }
`

class BasketCard extends PureComponent {
  static propTypes = {
    icons: PropTypes.arrayOf().isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const { icons, subtitle, title, ...rest } = this.props

    return <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {icons.length > 0 &&
        <IconList>
          {icons.map(icon => <li><ImageIcon image={icon} /></li>)}
        </IconList>
      }
    </Container>
  }
}

export default BasketCard
