import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 20px;
  justify-content: flex-start;
`

const Quantity = styled.span`
  margin-right: ${p => 2 * p.theme.spacing}px;
  min-width: ${p => 7 * p.theme.spacing}px;
`
const Unit = styled.span`
  color: ${p => p.theme.text.faded};
  margin-left: ${p => p.theme.spacing / 2}px;
`
const Name = styled.span``

class Ingredient extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
  }

  capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

  render () {
    const { name, quantity, unit } = this.props

    return <Container>
      <Quantity>
        {quantity}
        <Unit>{unit}</Unit>
      </Quantity>
      <Name>{this.capitalize(name)}</Name>
    </Container>
  }
}

export default Ingredient
