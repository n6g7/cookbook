import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import back from '@assets/caret-back.svg'

const List = styled.ol`
  align-items: stretch;
  background: ${p => p.theme.colours.white};
  box-shadow: 0 0 12px ${p => p.theme.colours.shadow};
  display: flex;
  flex-flow: row nowrap;
  height: ${p => p.theme.spacing.mult(16)}px;
  justify-content: space-evenly;
  margin: 0;
  padding: 0 ${p => p.theme.spacing.mult(6)}px;
`

const Item = styled.li`
  align-items: center;
  display: inline-flex;
  flex-flow: row nowrap;
  flex-grow: ${p => p.open ? 1 : 0};
  padding: 0 ${p => p.theme.spacing.mult(3)}px;
  position: relative;

  ${p => (p.active || p.open) && css`
    &::after {
      background: ${p => p.theme.colours.yellow};
      border-radius: ${p => `${p.theme.spacing.mult(2)}px ${p.theme.spacing.mult(2)}px`} 0 0;
      bottom: 0;
      content: '';
      height: ${p => p.theme.spacing.mult(1)}px;
      position: absolute;
      right: 0;
      width: 100%;
    }
  `}
`

const Back = styled.img.attrs({
  alt: 'back',
  src: back
})`
  margin-right: ${p => p.theme.spacing.mult(3)}px;
`

const Title = styled.span`
  font-weight: 500;
  margin-left: ${p => p.theme.spacing.mult(2)}px;
`

class NavbarItem extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    open: false
  }

  render () {
    const { icon, open, title, ...rest } = this.props

    return <Item open={open} {...rest}>
      {open && <Back />}
      <img src={icon} />
      {open && <Title>{title}</Title>}
    </Item>
  }
}

class Navbar extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf([NavbarItem])
    })).isRequired
  }

  render () {
    const { children, ...rest } = this.props

    const open = children.some(child => child.props.open)
    const list = open
      ? children.filter(child => child.props.open)
      : children

    return <List {...rest}>
      {list}
    </List>
  }
}

Navbar.Item = NavbarItem

export default Navbar
