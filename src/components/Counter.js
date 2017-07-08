import React from 'react'

import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import '../style/Counter.styl'

class Counter extends React.PureComponent {
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

Counter.propTypes = {
  image: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  max: React.PropTypes.number,
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
}

Counter.defaultProps = {
  value: 0
}

export default Counter
