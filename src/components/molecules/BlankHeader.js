import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.header`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  padding: ${p => p.theme.spacing.mult(10)}px 0 ${p => p.theme.spacing.mult(8)}px;
`
const Icon = styled.img`
  height: ${p => p.theme.spacing.mult(12)}px;
  margin-bottom: ${p => p.theme.spacing.mult(4)}px;
  width: ${p => p.theme.spacing.mult(12)}px;
`
const Title = styled.h2`
  font-size: ${p => p.theme.spacing.mult(10)}px;
  font-weight: 500;
  margin: 0 0 ${p => p.theme.spacing.unit}px;
`
const Subtitle = styled.p`
  font-size: ${p => p.theme.spacing.mult(4)}px;
  margin: 0;
`

class BlankHeader extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const { icon, subtitle, title, ...rest } = this.props

    return <Container {...rest}>
      <Icon src={icon} />
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </Container>
  }
}

export default BlankHeader
