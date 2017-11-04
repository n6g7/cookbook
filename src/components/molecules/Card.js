import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Banner } from '@atoms'

const Container = styled.article`
  background: white;
  border: 1px solid ${p => p.theme.border};
  border-radius: ${p => p.theme.spacing / 4}px;
  box-shadow: ${p => p.theme.spacing / 4}px ${p => p.theme.spacing / 4}px 0 ${p => p.theme.shadow};
  display: flex;
  flex-flow: column nowrap;
  height: ${p => 26 * p.theme.spacing}px;
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 0;
  justify-content: flex-end;
  padding: 0 ${p => 2 * p.theme.spacing}px;
  width: 100;
`

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${p => 2 * p.theme.spacing}px;
`

const Subtitle = styled.span`
  color: ${p => p.theme.text.faded};
  font-size: 12px;
  margin-top: ${p => p.theme.spacing / 2}px;
`

class Card extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.node,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    const {
      children,
      image,
      label,
      subtitle,
      title
    } = this.props

    return <Container>
      <Banner image={image}>
        { label }
      </Banner>
      <Nav>
        {children}
      </Nav>
      <Content>
        { title }
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  }
}

export default Card
