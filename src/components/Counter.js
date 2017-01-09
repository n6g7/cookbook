import React from 'react';

import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import '../style/Counter.styl';

class Counter extends React.PureComponent {
  update(delta) {
    return () => {
      const { onChange, value } = this.props;
      return onChange(value + delta);
    };
  }

  render() {
    const { image, label, value } = this.props;

    return <div className="counter">
      <img src={image} />
      <span>
        { label
          ? `${value} ${label}`
          : value
        }
      </span>
      <div className="buttons">
        <img src={plus} onClick={this.update(1)} />
        <img src={minus} onClick={this.update(-1)} />
      </div>
    </div>;
  }
}

Counter.propTypes = {
  image: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

Counter.defaultProps = {
  value: 0
};

export default Counter;
