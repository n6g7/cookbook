import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, ImageCard } from '@atoms'

const Container = styled(ImageCard)`
  align-items: center;
  border-radius: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  min-height: ${p => p.theme.spacing.mult(98)}px;
  margin-bottom: ${p => p.theme.spacing.mult(7)}px;
  padding: ${p => p.theme.spacing.mult(10)}px ${p => p.theme.spacing.mult(6)}px ${p => p.theme.spacing.mult(15)}px;
  position: relative;
`

const Title = styled.h2`
  font-size: ${p => p.theme.spacing.mult(10)}px;
  font-weight: 500;
  line-height: ${p => p.theme.spacing.mult(12)}px;
  margin: 0 0 ${p => p.theme.spacing.mult(4)}px;
  text-align: center;
`

const Subtitle = styled.h3`
  font-size: ${p => p.theme.spacing.mult(8)}px;
  font-weight: 500;
  line-height: ${p => p.theme.spacing.mult(10)}px;
  margin: 0 0 ${p => p.theme.spacing.mult(2)}px;
  text-align: center;
`

const Subsubtitle = styled.p`
  font-size: ${p => p.theme.spacing.mult(4)}px;
  line-height: ${p => p.theme.spacing.mult(6)}px;
  margin: 0;
  text-align: center;
`

const Nav = styled.nav`
  bottom: -${p => p.theme.spacing.mult(7)}px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 ${p => p.theme.spacing.mult(6)}px;
  position: absolute;
  width: 100%;

  ${Button} {
    flex-grow: 1;

    &:not(:first-child) {
      margin-left: ${p => p.theme.spacing.mult(2)}px;
    }
  }
`

class ImageHeader extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    subsubtitle: PropTypes.string,
    title: PropTypes.string.isRequired
  }

  render () {
    const { children, image, subsubtitle, subtitle, title, ...rest } = this.props

    return <Container image={image} {...rest}>
      <Title>{ title }</Title>
      {subtitle && <Subtitle>{ subtitle }</Subtitle>}
      {subsubtitle && <Subsubtitle>{ subsubtitle }</Subsubtitle>}
      <Nav>{ children }</Nav>
    </Container>
  }
}

export default ImageHeader
