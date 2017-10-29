import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setServings } from '@actions/recipes'
import { Counter } from '@atoms'
import servingsImage from '@assets/icon-servings.svg'
import vegetarianImage from '@assets/icon-vegetarian.svg'
import cheesefreeImage from '@assets/icon-cheesefree.svg'

class Recipe extends PureComponent {
  static propTypes = {
    cheesefreeServings: PropTypes.number.isRequired,
    image: PropTypes.string,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    veggieServings: PropTypes.number.isRequired
  }

  static defaultProps = {
    cheesefreeServings: 0,
    servings: 0,
    veggieServings: 0
  }

  render () {
    const {
      cheesefreeServings,
      image,
      index,
      name,
      servings,
      setServings,
      veggieServings
    } = this.props

    return <article>
      <header>
        <img src={image} />
      </header>
      <h3>{ name }</h3>
      <div className='counter-row'>
        <Counter
          image={servingsImage}
          label='total servings'
          onChange={v => setServings(index, v)}
          value={servings}
        />
      </div>
      <div className='counter-row'>
        <Counter
          image={cheesefreeImage}
          max={servings}
          onChange={v => setServings(index, v, 'cheesefreeServings')}
          value={cheesefreeServings}
        />
        <Counter
          image={vegetarianImage}
          max={servings}
          onChange={v => setServings(index, v, 'veggieServings')}
          value={veggieServings}
        />
      </div>
    </article>
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  setServings
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
