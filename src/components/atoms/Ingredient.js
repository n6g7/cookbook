import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  color: ${p => p.checked ? p.theme.text.faded : 'inherit'};
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
    checkable: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired
  }

  static defaultProps = {
    checkable: false,
    checked: false
  }

  onChange = event => {
    if (this.props.onChange) {
      this.props.onChange(event.target.checked)
    }
  }

  capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

  render () {
    const { checkable, checked, name, quantity, unit } = this.props

    return <Container checked={checked}>
      <Quantity>
        {checkable && <input type='checkbox' onChange={this.onChange} checked={checked} />}
        {quantity}
        <Unit>{unit}</Unit>
      </Quantity>
      <Name>{this.capitalize(name)}</Name>
    </Container>
  }
}

export default Ingredient
