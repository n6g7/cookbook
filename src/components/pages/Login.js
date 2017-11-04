import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { login } from '@actions/auth'
import basket from '@assets/basket.svg'
import penpaper from '@assets/penpaper.svg'
import { Button, ButtonList } from '@atoms'
import { BlankPage } from '@templates'

class Login extends PureComponent {
  render () {
    const { login } = this.props

    return <BlankPage title='Your recipes, your ingredients, your meal.'>
      <ButtonList>
        <Button
          icon={basket}
          colour='blue'
          onClick={login}
        >Sign in</Button>
        <Button
          icon={penpaper}
          onClick={login}
        >Create an account</Button>
      </ButtonList>
    </BlankPage>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
