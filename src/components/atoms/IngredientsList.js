import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  margin: ${p => 3 * p.theme.spacing}px 0;
  padding: 0;

  li {
    margin-bottom: ${p => p.theme.spacing}px;
  }
`

class IngredientsList extends PureComponent {
  static propTypes = {
    children: PropTypes.array.isRequired
  }

  render () {
    const { children, ...props } = this.props

    return <List {...props}>
      {children.map((ingredient, index) =>
        <li key={index}>
          {ingredient}
        </li>
      )}
    </List>
  }
}

export default IngredientsList
