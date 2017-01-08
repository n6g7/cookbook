import React from 'react';

import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  update(delta) {
    return () => this.setState({
      count: this.state.count + delta
    });
  }

  render() {
    const { image, label } = this.props;
    const { count } = this.state;

    return <div className="counter">
      <img src={image} />
      <span>
        { label
          ? `${count} ${label}`
          : count
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
  label: React.PropTypes.string
};

export default Counter;
