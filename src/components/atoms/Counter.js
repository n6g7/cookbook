import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import plus from '@assets/icon-plus.svg'
import minus from '@assets/icon-minus.svg'
import '../../style/Counter.styl'

class Counter extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string,
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    value: 0
  }

  componentWillReceiveProps (nextProps) {
    const { max, onChange, value } = nextProps

    if (max !== undefined && max < value) {
      onChange(max)
    }
  }

  update (delta) {
    return () => {
      const { max, onChange, value } = this.props
      const newValue = value + delta

      if (max !== undefined) {
        if (newValue <= max) return onChange(newValue)
        else return
      }
      return onChange(newValue)
    }
  }

  render () {
    const { image, label, value } = this.props

    return <div className='counter'>
      <img src={image} />
      <span>
        { label
          ? `${value} ${label}`
          : value
        }
      </span>
      <div className='buttons'>
        <button onClick={this.update(1)}>
          <img src={plus} />
        </button>
        <button onClick={this.update(-1)}>
          <img src={minus} />
        </button>
      </div>
    </div>
  }
}

export default Counter
